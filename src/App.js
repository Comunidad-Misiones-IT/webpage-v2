import { Switch, Route } from "react-router-dom";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Vivo from "./components/Vivo";
import Comunidad from "./components/Comunidad";
import About from "./components/About";
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
        <Route path="/nosotros" exact component={About} />
        <Route path="/live" exact component={Vivo} />
        <Route path="/comunidad" exact component={Comunidad} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;