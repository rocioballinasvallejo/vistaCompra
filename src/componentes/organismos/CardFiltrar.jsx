import React from 'react';
import '../../assets/styles/CardsFiltrarPrecio.css'

import IconoPerfil from '../../assets/images/IconoPerfil.png'
import Estrellas from '../../assets/images/5Estrellas.png'
import Favoritos from '../../assets/images/FavoritosCard.png'

import Foto1 from '../../assets/images/hamburguesa/ham6.jpg'
import Foto2 from '../../assets/images/hamburguesa/2.jpeg'
import Foto3 from '../../assets/images/hamburguesa/04.jpeg'
import Foto4 from '../../assets/images/hamburguesa/3.jpeg'
import Foto5 from '../../assets/images/hamburguesa/01.png'
import Foto6 from '../../assets/images/hamburguesa/1.jpeg'

function CardFiltrar() {
    return (
        <>

            <div className='containercardrow'>
                <div className="cardFiltrar">
                    <div className="cardsuperior">
                        <img src={IconoPerfil} className="perfilCard" />
                        <div className="cardHorizontal">
                            <p className="precioCard">$89.00</p>
                            <img src={Estrellas} className="Estrellas" />
                        </div>
                        <button className="bottonFavoritos">
                            <img src={Favoritos} className="favorito" />
                        </button>
                    </div>
                    <img src={Foto1} className="imagenCard" />
                    <p className="TituloCard">Clasica</p>
                    <p className="NombrePintorCard">especialidad de la casa</p>
                    <button className="btnComprarCard">COMPRAR</button>
                </div>


                <div className="cardFiltrar">
                    <div className="cardsuperior">
                        <img src={IconoPerfil} className="perfilCard" />
                        <div className="cardHorizontal">
                            <p className="precioCard">$93.00</p>
                            <img src={Estrellas} className="Estrellas" />
                        </div>
                        <button className="bottonFavoritos">
                            <img src={Favoritos} className="favorito" />
                        </button>
                    </div>
                    <img src={Foto2} className="imagenCard" />
                    <p className="TituloCard">hamburguesa con queso</p>
                    <p className="NombrePintorCard">incluye una coca chica</p>
                    <button className="btnComprarCard">COMPRAR</button>
                </div>

                <div className="cardFiltrar">
                    <div className="cardsuperior">
                        <img src={IconoPerfil} className="perfilCard" />
                        <div className="cardHorizontal">
                            <p className="precioCard">$84.00</p>
                            <img src={Estrellas} className="Estrellas" />
                        </div>
                        <button className="bottonFavoritos">
                            <img src={Favoritos} className="favorito" />
                        </button>
                    </div>
                    <img src={Foto3} className="imagenCard" />
                    <p className="TituloCard">hamburguesa endiablada</p>
                    <p className="NombrePintorCard">incluye chile habanero</p>
                    <button className="btnComprarCard">COMPRAR</button>
                </div>

                <div className="cardFiltrar">
                    <div className="cardsuperior">
                        <img src={IconoPerfil} className="perfilCard" />
                        <div className="cardHorizontal">
                            <p className="precioCard">$99.00</p>
                            <img src={Estrellas} className="Estrellas" />
                        </div>
                        <button className="bottonFavoritos">
                            <img src={Favoritos} className="favorito" />
                        </button>
                    </div>
                    <img src={Foto4} className="imagenCard" />
                    <p className="TituloCard">hamburguesa con papas</p>
                    <p className="NombrePintorCard">incluye una fanta</p>
                    <button className="btnComprarCard">COMPRAR</button>
                </div>

            </div>

            <div className='containercardrow'>
                <div className="cardFiltrar">
                    <div className="cardsuperior">
                        <img src={IconoPerfil} className="perfilCard" />
                        <div className="cardHorizontal">
                            <p className="precioCard">$76.00</p>
                            <img src={Estrellas} className="Estrellas" />
                        </div>
                        <button className="bottonFavoritos">
                            <img src={Favoritos} className="favorito" />
                        </button>
                    </div>
                    <img src={Foto5} className="imagenCard" />
                    <p className="TituloCard">hamburguesa vegana</p>
                    <p className="NombrePintorCard">Doble lechuga</p>
                    <button className="btnComprarCard">COMPRAR</button>
                </div>

                <div className="cardFiltrar">
                    <div className="cardsuperior">
                        <img src={IconoPerfil} className="perfilCard" />
                        <div className="cardHorizontal">
                            <p className="precioCard">$92.00</p>
                            <img src={Estrellas} className="Estrellas" />
                        </div>
                        <button className="bottonFavoritos">
                            <img src={Favoritos} className="favorito" />
                        </button>
                    </div>
                    <img src={Foto6} className="imagenCard" />
                    <p className="TituloCard">Pack 3pz clasicas</p>
                    <p className="NombrePintorCard">incluye una coca jumbo</p>
                    <button className="btnComprarCard">COMPRAR</button>
                </div>

            </div>

        </>
    );
}

export default CardFiltrar;