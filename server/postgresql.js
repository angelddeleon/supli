import {db} from './db.js'

export const getVentas = async ()=> {
    try {
        const result = await db.query("SELECT * FROM ventas")
        console.table(result.rows)
    } catch (error) {
        console.error(error)
    }
} 

export default getVentas