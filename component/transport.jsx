import { Container, Row, Col } from "react-bootstrap";
import Style from "./transport.module.css";
import Image from "next/legacy/image";

export default function Transport() {
  return (
    <Container fluid>
      <Container style={{ marginTop: "80px" }}>
        <h1 className={Style.head}>Transport</h1>
      </Container>
      <Row>
        <Col lg={12}>
          <div className={Style.back}>
            <Row>
              <Col lg={12} style={{ textAlign: "center" }}>
                <Image
                  className={Style.Img}
                  layout="intrinsic"
                  height={600}
                  width={900}
                  src="/transport.png"
                  alt="Ehan"
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
