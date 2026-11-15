import { EmployeeModel } from "../models/employee-model";
import { ProductModel } from "../models/product-model";
import { UserModel } from "../models/user-model";

/// Shape of the global state: the logged-in user and the vacations list.
export type AppState = {
    products: ProductModel[];
    employees: EmployeeModel[];
    user: UserModel;
};
