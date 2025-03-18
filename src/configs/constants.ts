
// dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const JWT_SECRET = process.env.JWT_SECRET || "default_jwt_secret";
export const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "default_refresh_jwt_secret";
export const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS || "10");
export const DB_URI = process.env.MONGO_URI || "mongodb+srv://msaroardev:6H48zfqfJpLMTRK3@cluster0.pinwa.mongodb.net/dropshop_dev";