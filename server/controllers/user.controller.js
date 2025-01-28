import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import Client from "../models/client.js"
import Supplier from "../models/supplier.js"
import User from "../models/user.js"



export const getAllUsers = async (req, res)=>{
    try {
        const result = await User.findAll()

        console.table(result)

        res.status(200).send(result)

    } catch (error) {
        res.status(500).send('Error getting' + error)
    }
}

export const getAllSuppliers = async (req, res)=>{
    try {
        const result = await Supplier.findAll()

        console.table(result)

        res.status(200).send(result)

    } catch (error) {
        res.status(500).send('Error getting' + error)
    }
}

export const createUser = async (req, res)=> {
    try {

        let {email, password, role} = req.body

        const passwordHashed = await bcrypt.hash(password, 10)

        console.log( email, passwordHashed, role );

        const newUser = await User.create(email, passwordHashed, role)

        let { id } = newUser

        console.log('succesful created ' + JSON.stringify(newUser))

        if (role === 'supplier'){
            const newSupplier = await Supplier.create(id, phone, email)

            console.log('succesful supplier created ' + JSON.stringify(newSupplier))
        } else if(role === 'client'){
            const newClient = await Client.create(id, phone, email)

            console.log('succesful supplier created ' + JSON.stringify(newClient))
        }

        res.status(200).send(JSON.stringify('done'))
    } catch (error) {
        res.send(error)
    }
}

export const signInUser  = async (req, res) => {
    try {
        const { email, password } = req.body; 

        if (!email) {
            return res.status(400).send({ error: 'Email is required.' });
        }

        const user = await User.findEmail(email);

        if (!user) {
            return res.status(404).send({ error: 'User  not found.' }); 
        }

        // Espera el resultado de la comparación de contraseñas
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return res.status(401).send({ error: 'Invalid password.' }); // Respuesta si la contraseña no coincide
        }

        const token = jwt.sign({"id": user.id, "role": user.role}, 'i_have_tochange_it',{'expiresIn': '1h'});

                // Configurar la cookie y enviar la respuesta
        res.cookie('access_token', token, {
            maxAge: 1000 * 60 * 60 // 1 hora
        });
        
        // Enviar respuesta de éxito
                res.status(200).send({ message: 'Sign in successful', user }); // No es necesario enviar el token en el cuerpo
        

    } catch (error) {
        console.error("Error signing in user: ", error);
        res.status(500).send({ error: error.message });
    }
};