import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const Main = () => {
    return (
        <div style={{ backgroundColor: 'lightblue', minHeight: '100vh', padding: '20px' }}>
            <Carousel>
                <Carousel.Item>
                    <Image src="https://i0.wp.com/www.teslaelectronic.com.pe/wp-content/uploads/2018/08/Arduino.Uno_.R3.2.jpg?fit=777%2C500&ssl=1" alt="First slide" fluid />
                    <Carousel.Caption style={{ color: 'black' }}>
                        <h3>Arduino Uno</h3>
                        <p>Ideal para desarrollar proyectos de electrónica y robótica</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="https://hifisac.com/web/image/product.template/2068/image_1024?unique=06e4fff" alt="Second slide" fluid />
                    <Carousel.Caption style={{ color: 'black' }}>
                        <h3>Protoboard 830</h3>
                        <p>Permite diseñar y cambiar circuitos de forma rápida y limpia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="https://static.wixstatic.com/media/d96bda_218a4a2d94744b0ba3d6be0bcebbb1c1~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg" alt="Third slide" fluid />
                    <Carousel.Caption style={{ color: 'black' }}>
                        <h3>Módulo láser KY-008</h3>
                        <p>Módulo con circuito emisor de luz láser</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
      );
}

export default Main;