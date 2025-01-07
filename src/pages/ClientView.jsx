import '../styles/ClientView.css'
import { NavBar } from '../Components/NavBar'

import imgBackground from '../assets/imgBackground.webp'
import imgProduct from '../assets/producto.webp'
import products from '../assets/productos.txt'


import { useState } from 'react'



export function ClientView() {

    /*Detects de width */

    let width = window.innerWidth


    let flecha = '<'
    let flecha2 = '>'

    console.log(products)

    let count = 0

    if(count === 0){
        let buton1 = document.getElementById('buton1')

        /*CONTINUAR que el hover sea de igual forma opacity 0*/
    }

    console.log(count)

    function aumentar() {
        count += 1

        console.log(count)
    }

    function disminuir() {
        count += -1
        console.log(count)
        
    }

    return(
    <>
        <header>
            <NavBar />
        </header>

        <main>
            <img className='backgroundImg' src={imgBackground} alt="" />

            <section className='productSection'>
                <h2>Nuevos Productos</h2>

                <ul>
                    <button id='buton1' onClick={disminuir}>
                        {flecha}
                    </button>

                    <li>
                        <article className='product-card'>
                            <img src={imgProduct} alt="" />
                            <aside className='product-card-info'>
                                <h3>Iphone 16</h3>
                                <p>El mejor de todos los tiempos 64 gb + 8gb ram..</p>
                                <a href='#'>tuZonaMarket</a>
                                <h4>2000$</h4>
                            </aside>
                        </article>
                    </li>

                    <li>
                        <article className='product-card'>
                            <img src={imgProduct} alt="" />
                            <aside className='product-card-info'>
                                <h3>Iphone 16</h3>
                                <p>El mejor de todos los tiempos 64 gb + 8gb ram..</p>
                                <a href='#'>tuZonaMarket</a>
                                <h4>2000$</h4>
                            </aside>
                        </article>
                    </li>

                    <li>
                        <article className='product-card'>
                            <img src={imgProduct} alt="" />
                            <aside className='product-card-info'>
                                <h3>Iphone 16</h3>
                                <p>El mejor de todos los tiempos 64 gb + 8gb ram..</p>
                                <a href='#'>tuZonaMarket</a>
                                <h4>2000$</h4>
                            </aside>
                        </article>
                    </li>

                    <li>
                        <article className='product-card'>
                            <img src={imgProduct} alt="" />
                            <aside className='product-card-info'>
                                <h3>Iphone 16</h3>
                                <p>El mejor de todos los tiempos 64 gb + 8gb ram..</p>
                                <a href='#'>tuZonaMarket</a>
                                <h4>2000$</h4>
                            </aside>
                        </article>
                    </li>

                    <li>
                        <article className='product-card'>
                            <img src={imgProduct} alt="" />
                            <aside className='product-card-info'>
                                <h3>Iphone 16</h3>
                                <p>El mejor de todos los tiempos 64 gb + 8gb ram..</p>
                                <a href='#'>tuZonaMarket</a>
                                <h4>2000$</h4>
                            </aside>
                        </article>
                    </li>

                    <li>
                        <article className='product-card'>
                            <img src={imgProduct} alt="" />
                            <aside className='product-card-info'>
                                <h3>Iphone 16</h3>
                                <p>El mejor de todos los tiempos 64 gb + 8gb ram..</p>
                                <a href='#'>tuZonaMarket</a>
                                <h4>2000$</h4>
                            </aside>
                        </article>
                    </li>

                    <button onClick={aumentar}>
                        {flecha2}
                    </button>

                </ul>
            </section>
        </main>
    </>
    )
}


export default ClientView