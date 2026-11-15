import { OkPacketParams } from "mysql2";
import { UserModel } from "../models/user-model";
import { dal } from "../utils/dal";
import { cyber } from "../utils/cyber";
import { CredentialsModel } from "../models/credentials-model";
import { ClientError } from "../models/client-error";
import { StatusCode } from "../models/enums";

class UserService {

    // Add user:
    public async addUser(user: UserModel): Promise<string> {

        // Validation:
        user.validate();

        // TODO item 5: force roleId here

        // If email taken:
        if (await this.isEmailTaken(user.email)) {
            throw new ClientError(StatusCode.Conflict, "Email already taken.");
        }

        // TODO item 7: hash the password here

        // SQL:
        const sql = "insert into users(firstName, lastName, email, password, roleId) values(?, ?, ?, ?, ?)";
        const values = [user.firstName, user.lastName, user.email, user.password, user.roleId];

        // Execute:
        const info = await dal.execute(sql, values) as OkPacketParams;
        user.id = info.insertId!;

        // Generate token:
        return cyber.generateToken(user);
    }

    // Login:
    public async login(credentials: CredentialsModel): Promise<string> {

        // Validation:
        credentials.validate();

        // TODO item 7: fetch by email, then compare the password against the hash
        const sql = "";
        const values: any[] = [];

        // Execute:
        const users = await dal.execute(sql, values) as UserModel[];
        const user = users[0];

        // TODO item 7: check user exists AND password matches, same error for both

        // Generate token:
        return cyber.generateToken(user);
    }

    // Check if email already taken:
    private async isEmailTaken(email: string): Promise<boolean> {

        // SQL:
        const sql = "select id from users where email = ?";
        const values = [email];

        // Execute:
        const users = await dal.execute(sql, values) as UserModel[];
        const user = users[0];

        // Return true if we have such email, false if we don't:
        return !!user;
    }
}

export const userService = new UserService();