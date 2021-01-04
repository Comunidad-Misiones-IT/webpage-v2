import React, { Component } from "react";
class Vivo extends Component {
  render() {
    return (
      <section className="text-gray-800 body-font text-center p-6">
        <h1>En vivo</h1>
        <iframe height="560" width="100%" src="https://player.twitch.tv/?channel=comunidadmit&parent=websitemit.netlify.app" scrolling="no" frameborder="0" allowfullscreen></iframe>
      </section>
    );
  }
}
export default Vivo;