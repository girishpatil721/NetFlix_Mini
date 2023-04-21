import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel className='carouse'>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://wallpaperaccess.com/thumb/781822.jpg" 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Breaking BAD</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/thumb/2331346.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Money Heist</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/1695677.jpg" 
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Daredevil</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/300505.jpg" 
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>interstellar</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    
  );
}

export default Slider;

