import express from "express"
import cors from "cors"
import {userRoute} from './routes/user.routes.js'
import cookieParser from "cookie-parser"

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser)
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000

let users = []

app.use('/users', userRoute)

app.get("/", (req, res) => {
    res.send(JSON.stringify(users));
})

app.post("/signup",(req, res) =>{
    try {
        const user = req.body

        users.push(user)


        console.log(`Usuario creado con exito ${JSON.stringify(user)}`)
        res.status(200).send(JSON.stringify({ message: 'Usuario creado con éxito. ' })); 
    } catch (error) {
        res.status(500).send(JSON.stringify({ error: 'Error al crear el usuario: ' + error }));
    }
    
})


app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
})