import { Container, Row, Col } from "react-bootstrap";
import Style from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <Container fluid className={Style.main}>
      <Row>
        <Col lg={12}>
          <div className={Style.pic}>
            <Image
              height={1280}
              width={1920}
              layout="responsive"
              src="/box.jpg"
              alt="EHAN"
            />
            <div className={Style.picUper}>
              <h2
                data-aos="fade-down"
                data-aos-duration="1000"
                className={Style.head}>
                We can change your Imagination into reality
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="3000"
                className={Style.text}>
                We not only wrap your product, we beautify and protect it
              </p>
            </div>
            <Image
              className={Style.ani}
              height={250}
              width={250}
              src="/trolley.png"
              alt="EHAN"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
