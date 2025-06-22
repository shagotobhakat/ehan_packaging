 "use client";
import { Container, Row, Col, Card } from "react-bootstrap";
import Style from "./production.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Production() {
  return (
    <Container style={{ marginTop: "80px", overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}>
        <h1 className={Style.head}>Production</h1>
      </motion.div>
      <Row>
        <Col lg={4} md={6}>
          <Card data-aos="zoom-in-up" className={Style.cardMain}>
            <Image
              style={{ margin: "0 auto" }}
              height={300}
              width={300}
              src="/Carton 3.jpg"
              alt="EHAN"
            />
            <Card.Body style={{ background: "rgba(0, 0, 0, 0.7)" }}>
              <Card.Title className={Style.cardHead}>Carton Board</Card.Title>
              <Card.Text className={Style.cardBody}>
                We produce best quality carton Boards
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          <Card data-aos="zoom-in-up" className={Style.cardMain}>
            <Image
              style={{ margin: "0 auto" }}
              height={300}
              width={300}
              src="/Carton 4.jpg"
              alt="EHAN"
            />
            <Card.Body style={{ background: "rgba(0, 0, 0, 0.7)" }}>
              <Card.Title className={Style.cardHead}>Carton Box</Card.Title>
              <Card.Text className={Style.cardBody}>
                Inside of our carton box
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          <Card data-aos="zoom-in-up" className={Style.cardMain}>
            <Image
              style={{ margin: "0 auto" }}
              height={300}
              width={300}
              src="/Carton 2.png"
              alt="EHAN"
            />
            <Card.Body style={{ background: "rgba(0, 0, 0, 0.7)" }}>
              <Card.Title className={Style.cardHead}>Carton Box</Card.Title>
              <Card.Text className={Style.cardBody}>
                Our proud customers
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          <Card data-aos="zoom-in-up" className={Style.cardMain}>
            <Image
              style={{ margin: "0 auto" }}
              height={300}
              width={300}
              src="/Carton 1.png"
              alt="EHAN"
            />
            <Card.Body style={{ background: "rgba(0, 0, 0, 0.7)" }}>
              <Card.Title className={Style.cardHead}>Carton Box</Card.Title>
              <Card.Text className={Style.cardBody}>
                Our proud customers
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          <Card data-aos="zoom-in-up" className={Style.cardMain}>
            <Image
              style={{ margin: "0 auto" }}
              height={300}
              width={300}
              src="/Carton 6.png"
              alt="EHAN"
            />
            <Card.Body style={{ background: "rgba(0, 0, 0, 0.7)" }}>
              <Card.Title className={Style.cardHead}>Carton Box</Card.Title>
              <Card.Text className={Style.cardBody}>
                Our proud customers
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          <Card data-aos="zoom-in-up" className={Style.cardMain}>
            <Image
              style={{ margin: "0 auto" }}
              height={300}
              width={300}
              src="/Carton 5.jpg"
              alt="EHAN"
            />
            <Card.Body style={{ background: "rgba(0, 0, 0, 0.7)" }}>
              <Card.Title className={Style.cardHead}>Shoe Box</Card.Title>
              <Card.Text className={Style.cardBody}>
                Our proud customers
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
