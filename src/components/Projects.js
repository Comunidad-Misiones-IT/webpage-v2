import styles from "./Projects.module.css";
import Mascotas from "../assets/mascotas.png";
import Footer from "../assets/footermitup.png"
import Trenes from "../assets/trenes.png"
import Mapa from "../assets/mapa.png"
import Header from "../assets/header.png"
export default function Project() {
    return (
        <section className="text-gray-800 body-font text-center p-8">
            <img src={Header} style={{ width: '65%' }} className="center-align" alt="Flyer del evento" />
            <div className="py-6">
                <h1>MITup 2022 - Un encuentro unico de tecnologia en Misiones.</h1>
                <h6 className="leading-relaxed">
                    Proponemos un encuentro para personas en general interesadas en tecnología,
                    emprendedores y participantes de la industria IT.
                    <br></br>Participarán referentes de la
                    comunidad tech de Misiones y del país. Tendremos una jornada llena de charlas,
                    sorteos y música en vivo.
                </h6>
            </div>
            <div>
                <hr className="my-6"></hr>

                <div className="py-6">
                    <h1 className="subtitle">Un evento hibrido y gratuito 🚀</h1>
                </div>

                <div className="py-6">
                    <h6><b>¿Cuándo y dónde?</b></h6>
                    <img className="center-align" src={Trenes} alt="Imagen de la ex-Estación de Trenes" />
                    <h6 className="py-6">
                        🗓️ Viernes 9 de diciembre de 2022<br></br>
                        📍 Auditorio Tierra Sin Mal, ex-estación de trenes. 4to tramo de la
                        Costanera (Av. Monseñor Kemerer).<br></br>
                        Ciudad de Posadas, Misiones.
                    </h6>
                    <a href="https://goo.gl/maps/wEkUcoEDHof67XKSA">
                    <img className="center-align" src={Mapa} alt="Mapa de Posadas" />
                    </a>
                </div>

                <div className="py-6">
                    <h1 className="subtitle">Agenda. Proximamente...</h1>
                    <img className="center-align" src={Mascotas} alt="Mascotas de MIT en diferentes colores" />
                </div>
            </div>
            <img src={Footer} style={{ height: '90px' }} className="center-align" alt="Barritas de colores" />
        </section>
    );
}