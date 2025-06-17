"use client";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Style from "./customer.module.css";
import Image from "next/image";

export default function Customer() {
  return (
    <Container fluid style={{ marginTop: "80px" }}>
      <Container>
        <h1 className={Style.head}>Customer</h1>
      </Container>
      <Row>
        <Col lg={12}>
          <Carousel className={Style.slide}>
            <Carousel.Item className="text-center">
              <Row>
                <Col lg={12}>
                  <Image
                    className={Style.pic}
                    height={150}
                    width={350}
                    src="/perfect.png"
                    alt="Tashdid"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <h3 className={Style.bodyOne}>PERFECT FOOTWEAR LTD.</h3>
                  <p className={Style.bodyTwo}>3 Kona Para, Demra, Dhaka</p>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item className="text-center">
              <Row>
                <Col lg={12}>
                  <Image
                  className={Style.pic}
                    height={150}
                    width={300}
                    src="/pran.png"
                    alt="Tashdid"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <h3 className={Style.bodyOne}>PRAN-RFL Group</h3>
                  <p className={Style.bodyTwo}>
                    PRAN Center, 105 Middle Badda,Dhaka
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item className="text-center">
              <Row>
                <Col lg={12}>
                  <Image
                  className={Style.picAci}
                    height={150}
                    width={500}
                    src="/aci.png"
                    alt="Tashdid"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <h3 className={Style.bodyOne}>ACI LIMITED</h3>
                  <p className={Style.bodyTwo}>
                    245, Tejgaon Industrial Area,Dhaka-1208
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item className="text-center">
              <Row>
                <Col lg={12}>
                  <Image
                  className={Style.pic}
                    height={150}
                    width={350}
                    src="/haque.png"
                    alt="Tashdid"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <h3 className={Style.bodyOne}>A T Haque</h3>
                  <p className={Style.bodyTwo}>
                    340-341,Tejgaon Industrial Area,Dhaka-1208
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item className="text-center">
              <Row>
                <Col lg={12}>
                  <Image
                  className={Style.pic}
                    height={150}
                    width={300}
                    src="/alin.png"
                    alt="Tashdid"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <h3 className={Style.bodyOne}>Alin Food Products Ltd</h3>
                  <p className={Style.bodyTwo}>124/1, Laskhmipur,Bhairob</p>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item className="text-center">
              <Row>
                <Col lg={12}>
                  <Image
                  className={Style.pic}
                    height={150}
                    width={300}
                    src="/fuwang.png"
                    alt="Tashdid"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <h3 className={Style.bodyOne}>Fu-wang Foods Ltd</h3>
                  <p className={Style.bodyTwo}>
                    House-55, Road-17 Abdul Alim Nakib Road, Dhaka 1213
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item className="text-center">
              <Row>
                <Col lg={12}>
                  <Image
                  className={Style.pic}
                    height={150}
                    width={300}
                    src="/Sajeeb.png"
                    alt="Tashdid"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <h3 className={Style.bodyOne}>Sajeeb Group</h3>
                  <p className={Style.bodyTwo}>
                    Shezan Point (Level 6), 2 Indira Road, Farmgate, Dhaka 1215
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
