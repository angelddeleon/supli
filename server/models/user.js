import { db } from "../db.js";

class User{
    static async create(email, password, role){
        try {
            let result = await db.query(
                'INSERT INTO users (email, password, role) VALUES($1, $2, $3) RETURNING *',
                [email, password, role]
            )

            return result.rows[0]
        } catch (error) {
            return error
        }
    }

    static async findEmail(email) {
        try {
            const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);
    
            if (result.rows.length === 0) {
                return null;
            }
    
            return result.rows[0]; // Devuelve el primer usuario encontrado
        } catch (error) {
            console.error("Error fetching user by email: ", error);
            throw new Error("Database query failed"); 
        }
    }


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