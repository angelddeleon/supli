import { db } from "../db.js";

class User{
    static async findAll(){
        try {
            const result = await db.query("SELECT * FROM users")
            return result.rows
        } catch (error) {
            return error
        }
    }
}

export default User