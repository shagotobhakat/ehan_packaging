"use client";
import { Container, Row, Col } from "react-bootstrap";
import Style from "./service.module.css";
import Image from "next/image";

export default function Service() {
  return (
    <Container fluid className={Style.main}>
      <Container>
        <h1 className={Style.head}>Machineries</h1>
        <Row>
          <Col lg={12}>
            <Row>
              <Col lg={6} md={6}>
                <Row className={Style.cardMain} data-aos="flip-up">
                  <Col lg={7}>
                    <Image
                      height={300}
                      width={300}
                      layout="responsive"
                      src="/Cutting Machine.jpg"
                      alt="EHAN"
                    />
                  </Col>
                  <Col lg={5} className={Style.body}>
                    <h2 className={Style.cardHead}>Cutting Machine</h2>
                    <p className={Style.cardBody}>
                      Cutting is completed by Cutting Machine
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} md={6}>
                <Row className={Style.cardMain} data-aos="flip-down">
                  <Col lg={7}>
                    <Image
                      height={300}
                      width={300}
                      layout="responsive"
                      src="/Corrugation Machine.jpeg"
                      alt="EHAN"
                    />
                  </Col>
                  <Col lg={5} className={Style.body}>
                    <h2 className={Style.cardHead}>Corrugation Machine</h2>
                    <p className={Style.cardBody}>
                      Corrugation is completed by Corrugation Machine
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} md={6}>
                <Row className={Style.cardMain} data-aos="flip-up">
                  <Col lg={7}>
                    <Image
                      height={300}
                      width={300}
                      layout="responsive"
                      src="/Pasting Machine.jpg"
                      alt="EHAN"
                    />
                  </Col>
                  <Col lg={5} className={Style.body}>
                    <h2 className={Style.cardHead}>Pasting Machine</h2>
                    <p className={Style.cardBody}>
                      Pasting is completed by Pasting Mechine
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} md={6}>
                <Row className={Style.cardMain} data-aos="flip-down">
                  <Col lg={7}>
                    <Image
                      height={300}
                      width={300}
                      layout="responsive"
                      src="/Pressure Machine.jpg"
                      alt="EHAN"
                    />
                  </Col>
                  <Col lg={5} className={Style.body}>
                    <h2 className={Style.cardHead}>Pressure Machine</h2>
                    <p className={Style.cardBody}>
                      Pressure is completed by Pressure Machine
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} md={6}>
                <Row className={Style.cardMain} data-aos="flip-down">
                  <Col lg={7}>
                    <Image
                      height={300}
                      width={300}
                      layout="responsive"
                      src="/Die Cutting Machine.jpg"
                      alt="EHAN"
                    />
                  </Col>
                  <Col lg={5} className={Style.body}>
                    <h2 className={Style.cardHead}>Die Cutting Machine</h2>
                    <p className={Style.cardBody}>
                      Die Cutting is completed by Die Cutting Machine
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} md={6}>
                <Row className={Style.cardMain} data-aos="flip-up">
                  <Col lg={7}>
                    <Image
                      height={300}
                      width={300}
                      layout="responsive"
                      src="/flexo machine.jpg"
                      alt="EHAN"
                    />
                  </Col>
                  <Col lg={5} className={Style.body}>
                    <h2 className={Style.cardHead}>Flexo Machine</h2>
                    <p className={Style.cardBody}>
                      Creasing, slotting, die-cutting, edge cutting is completed
                      by Flexo machine
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} md={6}>
                <Row className={Style.cardMain} data-aos="flip-down">
                  <Col lg={7}>
                    <Image
                      height={300}
                      width={300}
                      layout="responsive"
                      src="/Kiris Mechine.jpg"
                      alt="EHAN"
                    />
                  </Col>
                  <Col lg={5} className={Style.body}>
                    <h2 className={Style.cardHead}>Kiris Mechine</h2>
                    <p className={Style.cardBody}>
                      Slitting and scoring corrugated cardboard is completed by
                      Kiris machine
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} md={6}>
                <Row className={Style.cardMain} data-aos="flip-up">
                  <Col lg={7}>
                    <Image
                      height={300}
                      width={300}
                      layout="responsive"
                      src="/printing.jpg"
                      alt="EHAN"
                    />
                  </Col>
                  <Col lg={5} className={Style.body}>
                    <h2 className={Style.cardHead}>Printing Machine</h2>
                    <p className={Style.cardBody}>
                      Printing is completed by Printing Machine
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
