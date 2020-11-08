import { Switch, Route } from "react-router-dom";
import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Vivo from "./Vivo";
import Contacto from "./Contacto";
import Acercade from "./About";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route path="/eventos" exact component={AllPosts} />
        <Route path="/eventos/:slug" component={OnePost} />
        <Route path="/acercade" exact component={Acercade} />
        <Route path="/vivo" exact component={Vivo} />
        <Route path="/links" exact component={Contacto} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
