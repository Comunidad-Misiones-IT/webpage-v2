import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <section>
        <div class="container mx-auto">
          <div>
            <h1 class="text-2xl font-black text-purple-600 pb-2 px-6 md:px-12">
              Comunidad MIT
            </h1>
          </div>
          <div class="flex flex-wrap px-4">
            <div class="w-full lg:w-1/2 md:px-4 lg:px-6 py-5">
              <div class="bg-white hover:shadow-xl">
                <div class="">
                  <img
                    src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                    class="h-56 w-full border-white border-8 hover:opacity-25"
                  />
                </div>
                <div class="px-4 py-4 md:px-10">
                  <h1 class="font-bold text-lg">Quienes somos</h1>
                  <p class="py-4">
                    Somos una comunidad convencida de que Misiones tiene talento valioso para la industria IT, y lo queremos potenciar. Si querés saber qué hay detrás de esta página, manijear juegos o compartir experiencias.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 md:px-4 lg:px-6 py-5">
              <div class="bg-white hover:shadow-xl">
                <div class="">
                  <img
                    src="https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt=""
                    class="h-56 w-full border-white border-8 hover:opacity-25"
                  />
                </div>
                <div class="px-4 py-4 md:px-10">
                  <h1 class="font-bold text-lg">
                    MEET: ciclo de entrevistas
                  </h1>
                  <p class="py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi quas sapiente voluptate earum natus facilis dolor
                    deserunt dolorum tempora obcaecati consequatur rem, vel
                    distinctio perferendis tempore nemo sequi eos accusantium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
