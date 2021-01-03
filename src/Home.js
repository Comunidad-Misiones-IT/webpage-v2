import React, { Component } from "react";
import { Link } from "react-router-dom";
import BannerHome from "./BannerHome.png";
class Home extends Component {
  render() {
    return (
      <section className="text-gray-800 body-font text-center">
        <div class="h-auto overflow-hidden">
        <img alt="Home banner" class="object-cover object-center h-full w-full" src={BannerHome} />
        </div>
        <div class="container px-5 py-12 mx-auto">
        <h1>¿Qué hacemos?</h1>
          <div class="flex items-center lg:w-3/5 mx-auto border-b pt-6 pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
            <img src="https://img.icons8.com/cotton/64/000000/planner.png"/>
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                Charlas y talleres
              </h2>
              <p class="leading-relaxed text-base">
                Organizamos charlas y talleres para que aprendas habilidades nuevas y progreses en el ámbito laboral.
              </p>
              <Link class="mt-3 text-mit inline-flex items-center" to="/eventos">Ver más
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                Proyectos
              </h2>
              <p class="leading-relaxed text-base">
                Buscamos que adquieras experiencias nuevas y potenciar tu talento. Aprendamos, enseñemos y avancemos juntos.
                </p>
                <Link class="mt-3 text-mit inline-flex items-center" to="/comunidad">Ver más
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
            <img src="https://img.icons8.com/cotton/64/000000/code.png"/>
            </div>
          </div>
          <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
            <img src="https://img.icons8.com/cotton/64/000000/controller--v3.png"/>
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Juegos</h2>
              <p class="leading-relaxed text-base">
                Jugamos juegos para pasar el rato ¿Sos gamer? ¿Streamer? ¿Gamer dev? Vení a compartir con nosotros.
              </p>
              <a href="https://discord.com/invite/X3UP9Bj" class="mt-3 text-mit inline-flex items-center">Ver más
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
