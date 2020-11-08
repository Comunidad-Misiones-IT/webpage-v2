import React, { Component } from "react";
import bot from "./bot.png";

class Home extends Component {
  render() {
    return (
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center bg-gray-100">
          <div className="lg:max-w-lg lg:w-full md:w-1/2">
            <img className="object-center rounded" alt="robot" src={bot} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-4 md:pl-2 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
              Comunidad Misiones IT
            </h1>
            <p className="mb-8 leading-relaxed leading-relaxed">
              Somos Misiones IT, una comunidad de desarrolladores y desarrolladoras de la provincia de Misiones (Argentina)
            </p>
            <div className="flex justify-center">
              <a href="https://discord.com/invite/6Tkv8pn">
                <button className="inline-flex text-white bg-mit rounded border-0 py-2 px-6 focus:outline-none ounded text-lg">
                  Discord
                </button>
              </a>
              <a href="/eventos">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">
                  Eventos
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-mit flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Charlas y talleres
              </h2>
              <p className="leading-relaxed text-base">
                Organizamos charlas y talleres para que aprendas habilidades nuevas y progreses en el ámbito laboral.
              </p>
              <a className="mt-3 text-mit inline-flex items-center">
                Ver más
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Voluntariado
              </h2>
              <p className="leading-relaxed text-base">
                Buscamos que adquieras experiencias nuevas y potenciar tu talento. Aprendamos, enseñemos y avancemos juntos.
              </p>
              <a className="mt-3 text-mit inline-flex items-center">
                Ver más
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-mit flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-mit flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Juegos
              </h2>
              <p className="leading-relaxed text-base">
                Juegamos juegos para pasar el rato ¿Sos gamer? ¿Streamer? ¿Gamer dev? Vení a compartir con nosotros.
              </p>
              <a className="mt-3 text-mit inline-flex items-center">
                Ver más
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <a href="/acercade">
            <button className="flex mx-auto mt-20 text-white bg-mit border-0 py-2 px-8 focus:outline-none rounded text-lg">
              ¡Conocenos!
            </button>
          </a>
        </div>
      </section>
    );
  }
}

export default Home;
