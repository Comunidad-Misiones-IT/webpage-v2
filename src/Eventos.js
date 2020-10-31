import React, { Component } from "react";

class Eventos extends Component {
  render() {
    return (
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img
            class="rounded-lg md:w-56"
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
            alt="Woman paying for a purchase"
          />
        </div>
        <div class="mt-4 md:mt-0 md:ml-6">
          <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">
            Miércoles 20 de noviembre / 19:30hs
          </div>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
          >
            Charla de introducción a Figma
          </a>
          <p class="mt-2 text-gray-600">
          Ulises nos estará introduciendo en esta fantástica herramienta de diseño colaborativa. Para saber más escribinos a hola@mit.ar
          </p>
        </div>
      </div>
    );
  }
}

export default Eventos;
