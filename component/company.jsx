"use client";
import { Container, Row, Col } from "react-bootstrap";
import Style from "./company.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Production() {
  return (
    <Container style={{ marginTop: "80px" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}>
        <h1 className={Style.head}>Sister Concern</h1>
      </motion.div>
      <Row>
        <Col lg={4} md={6}>
          <div data-aos="flip-left" className={Style.cardMain}>
            <Link href="https://perfectfootwear.ltd/" target="_blank">
              <Image
                className={Style.Img}
                height={150}
                width={300}
                layout="intrinsic"
                src="/perfectFT.png"
                alt="Tashdid"
              />
            </Link>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div data-aos="flip-up" className={Style.cardMain}>
            <Link href="https://www.tashdid.com.bd/" target="_blank">
              <Image
                className={Style.Img}
                height={150}
                width={300}
                layout="intrinsic"
                src="/tashdid.png"
                alt="Tashdid"
              />
            </Link>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div data-aos="flip-right" className={Style.cardMain}>
            <Link href="http://www.themuses.net/" target="_blank">
              <Image
                className={Style.Img}
                height={150}
                width={300}
                layout="intrinsic"
                src="/muses.png"
                alt="Tashdid"
              />
            </Link>
          </div>
        </Col>
        <Col className={Style.extraOne} lg={2} md={3}></Col>
        <Col lg={4} md={6}>
          <div data-aos="flip-left" className={Style.cardMain}>
            <Link href="https://junainatrading.llc/" target="_blank">
              <Image
                className={Style.Img}
                height={150}
                width={300}
                layout="intrinsic"
                src="/junaina.png"
                alt="The Muses"
              />
            </Link>
          </div>
        </Col>
        <Col className={Style.extra} md={3}></Col>
        <Col lg={4} md={6}>
          <div data-aos="flip-right" className={Style.cardMain}>
            <Image
              className={Style.Img}
              height={150}
              width={300}
              layout="intrinsic"
              src="/ehanTA.png"
              alt="Tashdid"
            />
          </div>
        </Col>
        <Col lg={2} md={3}></Col>
      </Row>
    </Container>
  );
}
