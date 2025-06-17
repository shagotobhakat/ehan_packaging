import { Container, Row, Col } from "react-bootstrap";
import Style from "./quality.module.css";

export default function Quality() {
  return (
    <Container fluid className={Style.qty}>
      <Row>
        <Col lg={2}>
          <div className={Style.left} data-aos="fade-right"></div>
        </Col>
        <Col lg={8} xs={12} sm={12}>
          <div className={Style.main}>
            <h2 className={Style.one}>Production and Quality</h2>
            <p className={Style.two}>
              Quality comes first for EHAN Packaging Industry. We never
              compromise with quality. Our top notch quality of work made our
              loyal customers to certify us as one of the best printing and
              packaging industry in our country. But our target is to be the
              best printing and packaging industry in the Bangladesh. With a
              humongous yearly production rate of cartons we always serve our
              customers with great care and on time commitment.
            </p>
          </div>
        </Col>
        <Col lg={2}>
          <div className={Style.right} data-aos="fade-left"></div>
        </Col>
      </Row>
    </Container>
  );
}
