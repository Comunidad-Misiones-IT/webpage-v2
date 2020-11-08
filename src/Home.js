import React, { Component } from "react";
import logo from "./mit.png";

class Home extends Component {
  render() {
    return (
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
          <img className="h-40 w-40 mb-10 object-cover object-center rounded" alt="robot" src={logo} />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Comunidad Misiones IT</h1>
            <p className="mb-8 leading-relaxed">Somos una comunidad convencida de que Misiones tiene talento
                    valioso para la industria IT, y lo queremos potenciar. Si
                    querés saber qué hay detrás de esta página, manijear juegos
                    o compartir experiencias.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Button</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
