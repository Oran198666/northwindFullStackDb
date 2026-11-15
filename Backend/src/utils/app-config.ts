import dotenv from "dotenv"; // npm install dotenv


class AppConfig {

public readonly environment = process.env.ENVIRONMENT!;
    public readonly isDevelopment = this.environment === "development";
    public readonly isProduction = this.environment === "production";

    public readonly mysqlHost = process.env.MYSQL_HOST!;
    public readonly mysqlUser = process.env.MYSQL_USER!;
    public readonly mysqlPassword = process.env.MYSQL_PASSWORD!;
    public readonly mysqlDatabase = process.env.MYSQL_DATABASE!;
    public readonly jwtSecret = process.env.JWT_SECRET!;

    public readonly productImagesBaseUrl = process.env.PRODUCT_IMAGES_BASE_URL!;

}

export const appConfig = new AppConfig();
