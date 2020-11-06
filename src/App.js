import { Switch, Route } from "react-router-dom";
import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Eventos from "./Eventos";
import Acercade from "./About";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";

function App() {
  return (
    <body className="pt-10 container mx-auto px-6 min-h-screen">
      <div className="App bg-gray-100">
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/eventos" component={AllPosts} />
            <Route path="/eventos/:slug" component={OnePost} />
            <Route path="/acercade" component={Acercade} />
          </Switch>
        <Footer />
      </div>
    </body>
  );
}

export default App;
