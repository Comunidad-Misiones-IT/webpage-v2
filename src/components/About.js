import React, { Component } from "react";
import Member from "./Member";
class About extends Component {
  render() {
    return (
      <section className="text-gray-800 body-font text-center p-6">
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />   
      </section>
    );
  }
}
export default About;