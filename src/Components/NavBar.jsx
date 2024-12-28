import { useState } from 'react';

import '../styles/NavBar.css';
import Logo from '../assets/supliLogo.png';
import userImage from '../assets/userImage.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function SearchBar() {
    return(
        <div className='searchBar'>
            <input type="text" />
            <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />
        </div>
    )
}

function CartAndUser () {
    // Inicializa isLoggedIn como un booleano
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className='CartAndUser'>
            {isLoggedIn ? (
                <ul>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon className='icon shoppingCart' icon={faShoppingCart} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={userImage} alt="" />
                        </a>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon className='icon shoppingCart' icon={faShoppingCart} />
                        </a>
                    </li>
                    <li>
                        <a href="#">Iniciar Sesión</a>
                    </li>
                    <li>
                        <a className='signUp' href="#">Registrarse</a>
                    </li>
                </ul>
            )}
        </div>
    );
}

export function NavBar() {
    return (

        <nav>
            <img className='logoImg' src={Logo} alt="logo" />

            <SearchBar />

            <CartAndUser />
               
        </nav>           
    );
}