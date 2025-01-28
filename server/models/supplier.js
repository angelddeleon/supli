import { db } from "../db.js"

class Supplier{
    static async create(user_id, phone, email){
        try {
            let result = await db.query(
                'INSERT INTO suppliers(user_id, phone, email) VALUES ($1, $2, $3)',
                [user_id, phone, email] 
            )

            return result.rows[0]
        } catch (error) {
            return error
        }
    }

    static async findAll(){
        try {
            const result = await db.query("SELECT * FROM suppliers")
            return result.rows
        } catch (error) {
            return error
        }
    }
}

export default Supplier