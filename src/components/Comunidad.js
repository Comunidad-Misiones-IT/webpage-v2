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

        <div className="flex flex-wrap justify-center p-4">
          <a href="https://twitter.com/ComunidadMIT">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0" style={{height:'90px', width:'90px'}}>
              <img src="https://img.icons8.com/color/96/000000/twitter--v1.png" style={{height:'50px'}} />
            </div>
          </a>

          <a target="_blank" href="https://www.instagram.com/comunidadmit/">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0" style={{height:'90px', width:'90px'}}>
              <img src="https://img.icons8.com/color/96/000000/instagram.png" style={{height:'50px'}} />
            </div>
          </a>

          <a target="_blank" href="https://www.linkedin.com/company/comunidad-mit">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0" style={{height:'90px', width:'90px'}}>
              <img src="https://img.icons8.com/color/96/000000/linkedin-2--v1.png" style={{height:'50px'}} />
            </div>
          </a>

          <a target="_blank" href="https://github.com/Comunidad-Misiones-IT">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0" style={{height:'90px', width:'90px'}}>
              <img src="https://img.icons8.com/color/96/000000/github-2.png" style={{height:'50px'}} />
            </div>
          </a>

          <a target="_blank" href="https://www.twitch.tv/comunidadmit">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0" style={{height:'90px', width:'90px'}}>
              <img src="https://img.icons8.com/color/96/000000/twitch.png" style={{height:'50px'}} />
            </div>
          </a>
          <a target="_blank" href="https://www.youtube.com/channel/UCLhrmyFEehkHytx89La2ENQ">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0" style={{height:'90px', width:'90px'}}>
              <img src="https://img.icons8.com/color/96/000000/youtube.png" style={{height:'50px'}} />
            </div>
          </a>

          <a target="_blank" href="https://open.spotify.com/user/5bgl2oo5nvp4is4ihv6u4umet">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0" style={{height:'90px', width:'90px'}}>
              <img src="https://img.icons8.com/color/96/000000/spotify.png" style={{height:'50px'}} />
            </div>
          </a>
        </div>

        <iframe className="center-align" src="https://discord.com/widget?id=742101163008327761&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

      </section>
    );
  }
}
export default Comunidad;