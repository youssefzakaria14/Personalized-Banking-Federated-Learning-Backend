import "dotenv/config"; 

class envConfig {
    static host : string = process.env.HOST ?? "";
    static port : number = parseInt(process.env.PORT ?? "3000");
    static dbHost : string = process.env.DB_HOST ?? "";
    static dbPort : number = parseInt(process.env.DB_PORT ?? "");
    static dbUser : string = process.env.DB_USER ?? "";
    static dbPass : string = process.env.DB_PASS ?? "";
    static secret : string = process.env.SECRET_KEY ?? "";
    static refreshToken : string = process.env.REFRESH_TOKEN ?? "";
}

export default envConfig;