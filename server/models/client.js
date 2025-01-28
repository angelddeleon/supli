import { db } from "../db.js"

class Client{
    static async create(user_id, phone, email){
        try {
            let result = await db.query(
                'INSERT INTO clients(user_id, phone, email) VALUES ($1, $2, $3) RETURNING *',
                [user_id, phone, email] 
            )

            return result.rows[0]
        } catch (error) {
            return error
        }
    }
}

export default Client