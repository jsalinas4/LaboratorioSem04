import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import Componentes from './data/componentes.json'
import './style.css'

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    return <main>
        <Carousel>
            {
                Componentes.map(it => {
                    return (<Carousel.Item onClick={(e) => {
                        e.preventDefault(); handleClick(it.slug)
                    }}>
                        <img className='w-100 dark-image' src={it.picture}></img>
                        <Carousel.Caption className='text-dark'>
                            <h3>{it.name}</h3>
                            <p>{it.description}</p>
                            <button className="btn btn-primary" >Ver detalle</button>
                        </Carousel.Caption>
                    </Carousel.Item>);
                })
            }
        </Carousel>
        <p>Nos especializamos en proporcionar una amplia gama de componentes electrónicos de alta calidad para proyectos de ingeniería, educación y desarrollo tecnológico. Desde resistencias y condensadores hasta módulos avanzados y microcontroladores como Arduino, somos su fuente confiable para todos los productos electrónicos que necesita.</p>
        <h1 className="display-12">Nuestra Misión: </h1>
        <p>Proveer componentes electrónicos de calidad superior a precios competitivos, apoyando tanto a profesionales como a aficionados en la creación e innovación de proyectos tecnológicos.</p>
    </main >;
}

export default Main;