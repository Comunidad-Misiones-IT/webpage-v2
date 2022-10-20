import Member from "./Member";
import styles from "./Projects.module.css";
export default function Project() {
    return (
        <section className="text-gray-800 body-font text-center p-8">
            <div>
               <h1>MITup 2022 - Proximamente</h1>
                <h6 className="leading-relaxed" hidden>
                    Sumate a colaborar en un proyecto open source y ayudá a una organización sin fines de lucro.
                </h6>
            </div>
            <div hidden>
            <hr className="my-6"></hr>
            
            <div>
                <h1 className="subtitle">Proyecto #1 - Aplicación de adopción de Mascotas</h1>
            </div>

            <div className="p-4">
            <h6><b>¿De qué se trata?</b></h6>
                <h6>
                Nuestra aplicación de adopción es una herramienta pensada como una red social de mascotas, donde se pueda consultar por mascotas en adopción, mascotas perdidas, búsquedas de tránsito, búsqueda de nodrizas, recolección de donativos y material de consulta con información útil.
                </h6>
            </div>

            <div className="p-4 text-left">
                <div className={styles.card}>
                    <h6><b>¿Qué buscamos?</b></h6>
                    <ul>
                        <li>🐾 Proveer de una herramienta open source a la comunidad misionera.</li>
                        <li>🐾 Colaborar con las protectoras y rescatistas de animales.</li>
                        <li>🐾 Promover la adopción, cuidado y tenencia responsable de mascotas.</li>
                        <li>🐾 Facilitar los medios de difusión de búsquedas para redes sociales.</li>
                        <li>🐾 Impulsar el desarrollo de software local.</li>
                    </ul>
                </div>
            </div>

            <div className="p-4 text-left">
                <h6><b>Leaders:</b></h6>
            </div>
                <div className="text-gray-800 text-left px-2 flex flex-wrap">
                    <Member 
                        name="Gabito Martin" 
                        role="Project Leader"
                        avatar="https://pbs.twimg.com/profile_images/1307415701964173315/0FaIQQhO_400x400.jpg"
                        twitter="https://twitter.com/Gabito_dev"
                        insta="https://www.instagram.com/gabito_dev/"
                        linkedin="https://www.linkedin.com/in/jonathan-martin-025890b5/"
                    />

                    <Member 
                        name="Ale Bogado" 
                        role="Backend Leader"
                        avatar="https://pbs.twimg.com/profile_images/1292100480416571395/vze_Vhih_400x400.jpg"
                        twitter="https://twitter.com/AleBogadoOk"
                        insta="https://www.instagram.com/allexwentworthok/"
                        linkedin="https://www.linkedin.com/in/alebogadok/"
                    />
                </div>
                <div className="text-gray-800 text-left px-2 flex flex-wrap">
                    <Member 
                        name="Nataya Flores" 
                        role="Frontend Leader"
                        avatar="https://avatars.githubusercontent.com/u/59546935?v=4"
                        twitter="https://twitter.com/natayafs"
                        insta="https://www.instagram.com/natayafs/"
                        linkedin="https://www.linkedin.com/in/natayafs/"
                    />

                    <Member 
                        name="Lucas Bracamonte" 
                        role="UI UX Leader"
                        avatar="https://pbs.twimg.com/profile_images/1315073302474485762/GKQLSJcZ_400x400.jpg"
                        twitter="https://twitter.com/bracamon_lucas"
                        insta="https://www.instagram.com/lucas_bracamonte_/"
                        linkedin="https://www.linkedin.com/in/lucasbracamonte/"
                    />
                </div>

                <div className="rounded my-4 overflow-hidden">
                <a target="_blank" href="https://mtwe5yl7z06.typeform.com/to/OB06lqpf">
                    <button className="w-full md:w-auto text-center rounded px-4 py-2 bg-mit m-1">
                        <b className="text-white">Postulá a una ONG</b>
                    </button>
                </a>
                <a target="_blank" href="https://mtwe5yl7z06.typeform.com/to/i0uiemlW">
                    <button className="w-full md:w-auto text-center rounded px-4 py-2 bg-mit mx-1">
                    <b className="text-white">🐾 Sumate a colaborar</b>
                    </button>
                </a>
            </div>
            </div>
        </section>
    );
}