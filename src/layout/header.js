import { Link } from "react-router-dom";

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);


const Header = () => {
    return <header>
        <h1 className ="text-center"> Electronica Store</h1>
         <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><i data-feather="home"></i>  Inicio</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#"><i data-feather="cpu"></i>Arduinos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i data-feather="monitor"></i>Pantallas</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i data-feather="users"></i>Sobre nosotros</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i data-feather="help-circle"></i>  Ayuda</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i data-feather="shopping-cart"></i>  Carrito</a>
                                </li>
                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Ingresa una producto" aria-label="Buscar productos"></input>
                                <button class="btn btn-outline-success" type="submit">
                                    <i data-feather="search"></i>
                                      Buscar</button>
                            </form>
                        </div>
                    </div>
                </nav>
    </header>;
}

export default Header;