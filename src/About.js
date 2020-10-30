import React, { Component } from "react";
import AvatarNata from "./avatars/Nata";
import AvatarJonathan from "./avatars/Jonathan";

class About extends Component {
  render() {
    return (
      <div>
        <AvatarNata />
        <AvatarJonathan />
      </div>
    );
  }
}

export default About;
