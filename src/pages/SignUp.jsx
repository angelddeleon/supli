import { useNavigate } from 'react-router'
import '../app.css'


export function SignUp() {

    const navigate = useNavigate()

    async function postSignUp(e) {
        e.preventDefault()

        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let role = document.getElementById('role').value

        const infoUser = { email, password, role}

        try {
            const response = await fetch('http://localhost:3000/users', {
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
        

        console.log(`hola ${email}  ${password} ${role} `)
    }
    
    return(
        <main className="bg-gray-500 h-screen flex items-center justify-center">
            <div className="p-10 w-full max-w-md bg-white rounded-lg shadow-2xl">
                <h1 className="text-center text-2xl font-bold mb-8">Registrarse</h1>

                <form onSubmit={postSignUp} className="flex flex-col">

                    <label htmlFor="email" className="mb-2 font-semibold">
                        Correo electrónico
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
                        required
                    />

                    
                    <label htmlFor="password" className="mb-2 font-semibold">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
                        required
                    />

                    {/* Campo de selección de rol */}
                    <label htmlFor="role" className="mb-2 font-semibold">
                        Rol
                    </label>
                    <select
                        name="role"
                        id="role"
                        className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 "
                        required
                    >
                        <option value="supplier">Proveedor</option>
                        <option value="client">Cliente</option>
                    </select>


                    <button
                        type="submit"
                        className="inline-block bg-blue-400 text-white font-semibold p-4 rounded hover:bg-blue-950 transition duration-200"
                    >
                        Registrarse
                    </button>
                </form>
            </div>
            </main>
    )
}

export default SignUp