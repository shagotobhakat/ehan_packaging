import { Container, Row, Col } from "react-bootstrap";
import Style from "./proprietor.module.css";
import Image from "next/image";

export default function Proprietor() {
  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Row>
            <Col lg={4}>
              <div className={Style.left} data-aos="fade-right"></div>
            </Col>
            <Col lg={4}>
              <div data-aos="zoom-in" className={Style.one}>
                <Image
                  height={270}
                  width={230}
                  layout="intrinsic"
                  src="/md.png"
                  alt="EHAN"
                />
                <h2 className={Style.head}>Engr. Md. Saroar Alam</h2>
                <p className={Style.body}>Proprietor</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className={Style.right} data-aos="fade-left"></div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
