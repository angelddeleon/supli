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

export const createUser = async (req, res)=> {
    try {
        let {email, password, role} = req.body

        console.log(email, password, role)

        console.log('succesful created')

        res.send('done')
    } catch (error) {
        res.send(error)
    }
}
