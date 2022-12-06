import styles from "./Projects.module.css"
import Boton from "../assets/mitup/button.svg"
import Livick from "../assets/mitup/sponsors/livick.png"
import Edutekno from "../assets/mitup/sponsors/edutekno.png"
import Nucba from "../assets/mitup/sponsors/nucba.png"
import AYF from "../assets/mitup/sponsors/ayf.png"
import ClaseDig from "../assets/mitup/sponsors/clasedig.png"
import SZ from "../assets/mitup/sponsors/SZ.png"
import Frontendcafe from "../assets/mitup/sponsors/frontendcafe.svg"
import LDS from "../assets/mitup/sponsors/LDS.svg"
import LMDP from "../assets/mitup/sponsors/LMDP.png"
import RSG from "../assets/mitup/sponsors/rsg.png"
import SA from "../assets/mitup/sponsors/sysarmy.png"
import Devteam from "../assets/mitup/sponsors/devteam.png"
import Codear from "../assets/mitup/sponsors/CODEAR.svg"
import Technolatinas from "../assets/mitup/sponsors/technolatinas.png"
import Trenes from "../assets/mitup/trenes.png"
import Mapa from "../assets/mitup/mapa.png"

import CarlosP from "../assets/mitup/profetekno.jpg"
import CarlosJ from "../assets/mitup/carlos.png"
import Joey from "../assets/mitup/joey.jpg"
import Nata from "../assets/mitup/nata.jpg"
import Alice from "../assets/mitup/alice.jpg"
import David from "../assets/mitup/david.jpg"
import Banda from "../assets/mitup/banda.png"
import BotArg from "../assets/mitup/botarg.png"

export default function Project() {
    return (
        <section className="body-font text-center p-8">
            <img className="center-align pb-3" style={{borderRadius:'15px'}} src={Trenes} alt="Imagen de la ex-Estación de Trenes" />

            <div className="py-6">
                <h1>MITup 2022 - Un encuentro unico de tecnologia en Misiones.</h1>
                <p className="leading-relaxed">
                    Proponemos un encuentro para personas en general interesadas en tecnología,
                    emprendedores y participantes de la industria IT.
                    <br></br>Participarán referentes de la
                    comunidad tech de Misiones y del país. Tendremos una jornada llena de charlas,
                    sorteos, POAPs y música en vivo.
                </p>
            </div>
            <p className="subtitle">Un evento hibrido y gratuito 🚀</p><br></br>

            <div>
                <a href="https://www.eventbrite.com/e/mitup-2022-misiones-it-tickets-443807378817"><img src={Boton} className="center-align m-2" style={{ width: '300px' }} alt="botón tipo neón que con el texto: incribite acá" /></a>
                <hr className="my-6"></hr>
                <div className="py-6">
                    <p><b>¿Cuándo y dónde?</b></p>
                    <p className="py-6">
                        🗓️ Viernes 9 de diciembre de 2022<br></br>
                        📍 Centro Cultural "La Estación", Auditorio Tierra Sin Mal, ex-estación de trenes. <br></br>
                        4to tramo de la Costanera (Av. Monseñor Kemerer). Ciudad de Posadas, Misiones.<br></br>
                        🎟️ También podés verlo online por <a href="https://www.comit.ar/live/">ACÁ.</a>
                    </p>
                    <a href="https://goo.gl/maps/wEkUcoEDHof67XKSA">
                        <img className="center-align" src={Mapa} alt="Mapa de Posadas" />
                    </a>
                </div>

                <hr className="my-6"></hr>
                <div className="py-6">
                    <h1 className="subtitle">Agenda de la #MITup2022</h1>
                    <a href="https://www.eventbrite.com/e/mitup-2022-misiones-it-tickets-443807378817"><img src={Boton} className="center-align m-2" style={{ width: '300px' }} alt="botón tipo neón que con el texto: incribite acá" /></a>

                    <div className="flex items-center lg:w-3/5 mx-auto border-b pt-6 pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                            <img src={CarlosP} style={{borderRadius:'100%'}}/>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="title-font mb-2">
                                9:30hs | Carlos Cristian Priora
                            </h2>
                            <p className="leading-relaxed">
                                Tecnologías disruptivas: la cuarta revolución industrial ya está aquí.
                                <hr className="my-6"></hr>
                                👾 SORTEO: 2 ebooks + 4 cursos tecnología educativa para docentes de <a href="https://www.instagram.com/profetekno/">EduTekno</a>.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="title-font mb-2">
                                10:00hs | Alice Raquel Rambo
                            </h2>
                            <p className="leading-relaxed">
                                Tratamiento de residuos electrónicos.
                                <hr className="my-6"></hr>
                                👾 SORTEO: Teclado y mouse inalámbrico + Tableta digital Wacom de La Clase Digital.
                            </p>
                        </div>
                        <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                            <img src={Alice} style={{borderRadius:'100%'}}/>
                        </div>
                    </div>

                    <div className="flex items-center lg:w-3/5 mx-auto border-b pt-6 pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                            <img src={Nata} style={{borderRadius:'100%'}}/>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="title-font mb-2">
                                11:00hs | Nataya Flores
                            </h2>
                            <p className="leading-relaxed">
                                Hablemos un poco sobre brechas digitales.
                                <hr className="my-6"></hr>
                                👾 SORTEO: 1 hora de living + 1 consumición gratuita en <a href="https://www.instagram.com/safezoneok/">@safezoneok</a>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="title-font mb-2">
                                12:00hs | Joel A. Villarreal Bertoldi
                            </h2>
                            <p className="leading-relaxed">
                                ¡Qué genial que es Web3! ¿No?
                                <hr className="my-6"></hr>
                                👾 SORTEO: un mouse inalámbrico de La Clase Digital + Una remera de MIT.
                            </p>
                        </div>
                        <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                            <img src={Joey} style={{borderRadius:'100%'}}/>
                        </div>
                    </div>

                    <div className="flex items-center lg:w-3/5 mx-auto border-b pt-6 pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                            <img src={David} style={{borderRadius:'100%'}}/>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="title-font mb-2">
                                13:30hs | David Quintana
                            </h2>
                            <p className="leading-relaxed">
                                Web para emprendedores.
                                <hr className="my-6"></hr>
                                👾 SORTEO: 1 hora de living + 1 consumición gratuita en <a href="https://www.instagram.com/safezoneok/">@safezoneok</a>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="title-font mb-2">
                                14:00hs | Carlos David Jurado
                            </h2>
                            <p className="leading-relaxed">
                                Data: ¿Qué es y cómo iniciarse en la industria?
                                <hr className="my-6"></hr>
                                👾 SORTEO: Webcam full HD de La Clase Digital + Una remera de MIT.
                            </p>
                        </div>
                        <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                            <img src={CarlosJ} style={{borderRadius:'100%'}}/>
                        </div>
                    </div>


                    <div className="flex items-center lg:w-3/5 mx-auto border-b pt-6 pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                            <img src={Banda} style={{borderRadius:'100%'}}/>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="title-font mb-2">
                                15:00hs | Acustico de Toni & Gonza
                            </h2>
                            <p className="leading-relaxed">
                                Cierre musical a puro rock con <a href="https://www.instagram.com/tonimoran._/">@tonimoran_</a> y <a href="https://www.instagram.com/gonhorianski/">@gonhorianski</a>, miembros de <a href="https://www.instagram.com/bocanadapm/">@bocanadapm</a>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="title-font mb-2">
                                16:00hs | AFTER MITUP 2022
                            </h2>
                            <p className="leading-relaxed">
                                Veremos el partido de Argentina del Mundial de fútbol masculino Qatar 2022 en pantalla grande. Presencial.
                            </p>
                        </div>
                        <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                            <img src={BotArg} width='160' />
                        </div>
                    </div>
                </div>

                <a href="https://www.eventbrite.com/e/mitup-2022-misiones-it-tickets-443807378817"><img src={Boton} className="center-align m-2" style={{ width: '300px' }} alt="botón tipo neón que con el texto: incribite acá" /></a>

                <hr className="my-6"></hr>
                <h1 className="subtitle pt-6">Sponsors</h1>
                <div className="flex flex-wrap justify-center py-6 mx-6 px-6">
                    <img src={Livick} className="m-3" width='90' />
                    <img src={Edutekno} className="m-3" width='90' />
                    <img src={Nucba} className="m-3" width='190' />
                    <img src={ClaseDig} className="m-3" width='280' />
                    <img src={SZ} className="m-3" width='130' />
                    <img src={AYF} className="m-3" width='90' />
                </div>
                <hr className="my-6"></hr>

                <h1 className="subtitle pt-6">Comunidades amigas</h1>
                <div className="flex flex-wrap justify-center py-6 mx-6 px-6">
                    <img src={LDS} className="m-3" width='90' />
                    <img src={RSG} className="m-3" width='90' />
                    <img src={Codear} className="m-3" width='190' />
                    <img src={Frontendcafe} className="m-3" width='190' />
                    <img src={Technolatinas} className="m-3" width='200' />
                    <img src={LMDP} className="m-3" width='100' />
                    <img src={SA} className="m-3" width='100' />
                    <img src={Devteam} className="m-3" width='100' />
                </div>
            </div>
        </section>
    );
}