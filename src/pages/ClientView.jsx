import '../styles/ClientView.css'
import { NavBar } from '../Components/NavBar'

import imgBackground from '../assets/imgBackground.webp'



export function ClientView() {
    return(
    <>
        <header>
            <NavBar />
        </header>

        <main>
            <img className='backgroundImg' src={imgBackground} alt="" />
        </main>
    </>
    )
}


export default ClientView