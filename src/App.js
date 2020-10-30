import { Switch, Route } from "react-router-dom";
import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Eventos from "./Eventos";
import Acercade from "./About";

function App() {
  return (
    <div className="App bg-gray-100">
      <Header />
      <body class="pt-10 container mx-auto px-6 min-h-screen">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/eventos" component={Eventos} />
          <Route path="/acercade" component={Acercade} />
        </Switch>
      </body>
      <Footer />
    </div>
  );
}

export default App;
