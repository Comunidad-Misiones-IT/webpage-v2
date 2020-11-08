import { Link } from "react-router-dom";
import logo from "./mit2.png";

export default function Header() {
  return (
<header className="text-gray-700 body-font bg-mit">
<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img
      src={logo}
      className="w-16 h-18 text-white p-2"
      alt="Comunidad MIT"
    />
    </a>
    <nav id="site-menu" class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
    <Link
      to="/eventos"
      className="w-full md:w-auto text-center px-4 py-2 text-white hover:text-gray-800"
    >
      Eventos
    </Link>
    <Link
      to="/acercade"
      className="w-full md:w-auto text-center px-4 py-2 text-white hover:text-gray-800"
    >
      Nosotros
    </Link>
    </nav>
    <a
      target="_blank"
      rel="noreferrer"
      className="btn btn-secondary ml-3 text-white"
      href="https://discord.gg/DaYKCDt"
    >
      Sumate a Discord
    </a>
  </div>
</header>
  );
}
