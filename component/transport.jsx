"use client";
import { Container, Row, Col } from "react-bootstrap";
import Style from "./transport.module.css";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

export default function Transport() {
  return (
    <Container fluid>
      <Container style={{ marginTop: "80px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}>
          <h1 className={Style.head}>Transport</h1>
        </motion.div>
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
