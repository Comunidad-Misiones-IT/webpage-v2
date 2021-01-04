import React, { Component } from "react";
import BannerDiscord from "../assets/BannerDiscord.png";
class Comunidad extends Component {
  render() {
    return (
      <section className="text-gray-800 body-font text-center p-6">
        <h1>Comunidad</h1>
        <h6 className="leading-relaxed">
          Siguenos en las redes sociales, hagamos comunidad...
        </h6>
        <div class="rounded my-6 h-64 overflow-hidden">
          <a href="https://discord.com/invite/X3UP9Bj">
            <img alt="Home banner" class="object-cover object-center h-full w-full" src={BannerDiscord} />
          </a>
        </div>

        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/4 w-1/2 p-4">
          <a href="https://twitter.com/ComunidadMIT">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
            <img src="https://img.icons8.com/color/96/000000/twitter--v1.png"/>
            </div>
          </a>
          </div>

          <div class="lg:w-1/4 w-1/2 p-4">
          <a href="https://www.instagram.com/comunidadmit/">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
            <img src="https://img.icons8.com/color/96/000000/instagram.png"/>
            </div>
            </a>
          </div>

          <div class="lg:w-1/4 w-1/2 p-4">
          <a href="https://www.linkedin.com/company/comunidad-mit">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
            <img src="https://img.icons8.com/color/96/000000/linkedin-2--v1.png"/>
            </div>
            </a>
          </div>

          <div class="lg:w-1/4 w-1/2 p-4">
          <a href="https://github.com/Comunidad-Misiones-IT">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
            <img src="https://img.icons8.com/color/96/000000/github-2.png"/>
            </div>
            </a>
          </div>
        </div>

        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 w-1/2 p-4">
          <a href="https://www.twitch.tv/comunidadmit">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
            <img src="https://img.icons8.com/color/96/000000/twitch.png"/>
            </div>
          </a>
          </div>

          <div class="lg:w-1/3 w-1/2 p-4">
          <a href="https://www.youtube.com/channel/UCLhrmyFEehkHytx89La2ENQ">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
            <img src="https://img.icons8.com/color/96/000000/youtube.png"/>
            </div>
            </a>
          </div>

          <div class="lg:w-1/3 p-4">
          <a href="https://open.spotify.com/user/5bgl2oo5nvp4is4ihv6u4umet">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
            <img src="https://img.icons8.com/color/96/000000/spotify.png"/>
            </div>
            </a>
          </div>
        </div>

      </section>
    );
  }
}
export default Comunidad;