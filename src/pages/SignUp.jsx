import '../styles/SignUp.css'


export function SignUp() {

    async function postSignUp(e) {
        e.preventDefault()

        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let user = document.getElementById('user').value

        const infoUser = { email, password, user}

        try {
            const response = await fetch('http://localhost:3000/signup', {
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
            console.log(data); // Manejar la respuesta
    
        } catch (error) {
            console.log('Error en la solicitud:', error); // Manejar errores
        }
        

        console.log(`hola ${email}  ${password} ${user} `)
    }
    
    return(
        <main className='signup-section'>
            <h1>Registrarse</h1>

            <form onSubmit={postSignUp}>
                <label htmlFor="email">Correo eletronico</label>
                <input type="text" name='email' id='email'  />
                <label htmlFor="password">Contrasena</label>
                <input type="password" name="password" id="password" />
                <select name="" id="user" >
                    <option value="Proveedor">
                        Proveedor
                    </option>
                    <option value="Cliente">
                        Cliente
                    </option>
                </select>

                <button type='submit'>
                    Registrarse
                </button>
            </form>
        </main>
    )
}

export default SignUp