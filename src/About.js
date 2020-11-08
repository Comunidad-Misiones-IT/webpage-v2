import React, { Component } from "react";
import AvatarNata from "./avatars/Nata";
import AvatarJonathan from "./avatars/Jonathan";

class About extends Component {
  render() {
    return (
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Nosotros</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Te presentamos a continuación al equipo que trabaja día a día para que nuestra comunidad crezca cada vez un poquitito más...
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            <AvatarNata />
            <AvatarJonathan />
            <AvatarNata />
            <AvatarJonathan />
            <AvatarNata />
            <AvatarJonathan />
          </div>
        </div>
      </section>
    );
  }
}

export default About;
