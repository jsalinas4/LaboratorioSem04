import Componentes from './data/componentes.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const componente = Componentes.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{componente.name}</h1>
        <hr></hr>
        <img src={componente.picture}></img>
        <p>{componente.description}</p>
    </>);
}

export default Single;