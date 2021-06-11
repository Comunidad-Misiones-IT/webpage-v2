import { Link } from "react-router-dom";
import logo from "../assets/mit2.png";
export default function Header() {
  return (
        <header className="shadow-xl text-gray-600 body-font bg-mit">
          <div className="container mx-auto flex flex-wrap py-3 px-6 flex-col md:flex-row items-center">
            <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
            <img
              src={logo}
              className="w-16 h-18 text-white p-2"
              alt="Comunidad MIT"
            />
            </Link>
            <nav 
            id="site-menu" 
            className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center"
            >
            <Link
              to="/"
              className="w-full md:w-auto text-center px-4 py-2 text-white "
            >
              Inicio
            </Link>
            <Link
              to="/nosotros"
              className="w-full md:w-auto text-center px-4 py-2 text-white "
              hidden
            >
              Nosotros
            </Link>
            <Link
              to="/eventos"
              className="w-full md:w-auto text-center px-4 py-2 text-white "
            >
              Eventos
            </Link>
            <Link
              to="/comunidad"
              className="w-full md:w-auto text-center px-4 py-2 text-white "
            >
              Comunidad
            </Link>
            <Link
              to="/voluntariado"
              className="w-full md:w-auto text-center px-4 py-2 text-white "
            >
              Ayudá a una ONG
            </Link>
            </nav>
              <Link
                to="/live"
                className="w-full md:w-auto text-center rounded px-4 py-2 bg-gray-100"
              >
                <b className="text-gray-900">
                  <span className="text-red-600">● </span>
                  En vivo
                
                </b>
              </Link>
          </div>
        </header>
  );
}