import Jumbotron from 'react-bootstrap/Jumbotron';

function AboutPage() {
  return (
    <>
      <Jumbotron
        id="AboutContainer"
        // style={{ padding: "1%", height: "86vh", "margin-bottom": "0" }}
        style={{
          textAlign: "center",
          marginBottom: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "spaceAround",
            margin: "0",
          }}
        >
          <div id="AboutImageContainer">
            <img
              style={{ width: "100%", height: "100%", marginRight: "15px" }}
              alt="placeholder"
              src="https://major.com.au/wp-content/uploads/2019/01/Young-Builders-On-Worksite-Concept.jpg"
              href=""
            />
          </div>
          <div id="AboutContentContainer" className="page-body">
            <h1 className="display-4">Inspiration Homes</h1>
            <p className="lead">
              <strong>OUR COMMITMENT</strong> For us here At Inspiration Homes,
              we are committed to ensuring our clients have the best experience
              possible, we strive to finish every project on time, on budget,
              and with our clients happy to refer us to their friends and
              family!
            </p>
            <p className="lead page-body">
              <strong>WHY BUILD WITH US </strong>
              We understand the privilege of building your new home, and make
              every effort to exceed your expectations. Our team provides
              excellent communication and are available throughout the entire
              building process – We believe communication is key, especially for
              clients building for the first time.
            </p>
            <p className="lead page-body" style={{ color: "black" }}>
              <em>
                At Inspiration Homes , we do much more than build high qaulity
                homes. We understand our clients’ “inspirations”, and we bring
                them to life. Whether we are creating a luxury new home or a
                bespoke renovation, we apply the same kind of care and attention
                to detail that results in us exceeding our client expectations
                at every stage.
              </em>
            </p>
          </div>
        </div>
      </Jumbotron>
    </>
  );
}

export default AboutPage;
