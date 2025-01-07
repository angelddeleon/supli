import express from "express"
import cors from "cors"

const app = express()

app.use(cors())

const port = process.env.PORT || 3000

let users = []

app.get("/", (req, res) => {
    res.send(users)
})

app.post("/signup",(req, res) =>{
    try {
        const user = req.body

        users.push(user)


        console.log(`Usuario creado con exito ${user}`)
        res.sendStatus(200).send(JSON.stringify('Usuario creado con exito')) 
    } catch (error) {
        res.sendStatus(500).send(JSON.stringify('Error al crear el usuario ' + error))
    }
    
})


app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
})