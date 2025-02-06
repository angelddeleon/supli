import { useNavigate } from 'react-router'

import '../app.css'


export function SignIn() {

    const navigate = useNavigate()

    async function postSignIn(e) {
        e.preventDefault()

        let email = document.getElementById('email').value
        let password = document.getElementById('password').value


        const infoUser = { email, password}

        try {
            const response = await fetch('http://localhost:3000/users/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Asegúrate de establecer el tipo de contenido
                },
                body: JSON.stringify(infoUser)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
    
            const data = await response.json(); // Procesar la respuesta JSON

            navigate('/')

            console.log(data); // Manejar la respuesta
    
        } catch (error) {
            console.log('Error en la solicitud:', error); // Manejar errores
        }
        

        console.log(`hola ${email}  ${password}`)
    }
    
    return(
        <main className='signup-section'>
            <h1>Ingresar</h1>

            <form onSubmit={postSignIn}>
                <label htmlFor="email">Correo eletronico</label>
                <input type="text" name='email' id='email'  />
                <label htmlFor="password">Contrasena</label>
                <input type="password" name="password" id="password" />

                <button type='submit'>
                    Ingresar
                </button>
            </form>
        </main>
    )
}

export default SignIn


