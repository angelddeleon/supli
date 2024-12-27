import './ClientView.css';
import Logo from '../../assets/supliLogo.png';
import userImage from '../../assets/userImage.png';
import backgroundImg from '../../assets/imgBackground.webp';

import { useState } from 'react';

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
        <div className='CartAndUser '>
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

export function ClientView() {
    return (
        <>
            <header>
                <img src={Logo} alt="logo" />

                <SearchBar />

                <CartAndUser />
               
            </header>

            <main>
                <img className='backgroundImg' src={backgroundImg} alt="" />

            </main>
            
            
            
        </>
    );
}