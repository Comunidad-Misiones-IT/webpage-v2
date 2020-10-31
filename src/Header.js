import { Link, Route, Switch } from "react-router-dom";
import logo from "./mit.png";

export default function Header() {
  return (
    <header className="shadow-md w-full flex flex-col fixed md:relative z-50 bg-purple-700 ">
      <nav
        id="site-menu"
        className="container mx-auto flex flex-col md:flex-row w-full justify-between items-center px-4 md:px-6 bg-purple-700 shadow md:shadow-none"
      >
        <div className="w-full md:w-auto self-start md:self-center flex flex-row md:flex-none flex-no-wrap justify-between items-center">
          <a className="flex title-font items-center text-gray-900" href="/">
            <img
              src={logo}
              className="w-16 h-18 text-white p-2"
              alt="Comunidad MIT"
            />
          </a>
          <button
            className="hamburger block md:hidden focus:outline-none"
            type="button"
          >
            <span className="hamburger__top-bun"></span>
            <span className="hamburger__bottom-bun"></span>
          </button>
        </div>
        <div className="w-full md:w-auto self-end md:self-center md:flex flex-col md:flex-row items-center h-full py-1 pb-4 md:py-0 md:pb-0 hidden">
          <Link
            to="/eventos"
            className="w-full md:w-auto text-center px-4 py-2 text-white
            hover:text-gray-800"
          >
            Eventos
          </Link>
          <Link
            to="/acercade"
            className="w-full md:w-auto text-center px-4 py-2 text-white hover:text-gray-800"
          >
            Nosotros
          </Link>
          <a
            target="_blank"
            className="btn btn-secondary ml-3 text-white"
            href="https://discord.gg/DaYKCDt"
          >
            Sumate a Discord
          </a>
        </div>
      </nav>
    </header>
  );
}
