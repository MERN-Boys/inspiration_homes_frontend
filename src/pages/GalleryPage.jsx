import Carousel from "react-bootstrap/Carousel";

function GalleryPage() {
  return (
    <Carousel style={{"height":"86vh", "display":"flex", "alignItems":"center"}}>
      <Carousel.Item style={{"minHeight":"60%", "overflow":"hidden"}} >
        <img
          className="d-block w-100"
          src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>This is the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>This is the second slide</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>This is the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Fourth Slide Label</h3>
          <p>This is the fourth slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default GalleryPage;

/* <img className="d-block w-100" src="https://dummyimage.com/640x360/fff/aaa" alt="Second slide"/>
      <img className="d-block w-100" src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png" alt="First slide"/> */
