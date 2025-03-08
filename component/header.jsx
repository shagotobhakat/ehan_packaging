"use client";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Link from "next/link";
import Style from "./header.module.css";

export default function Header() {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <Container fluid className={Style.head}>
      <div className={header ? "Style.bg" : ""}>
        <Row>
          <Col lg={12}>
            <Navbar expand="lg" className={Style.main}>
              <Navbar.Brand href="/" className={Style.logo}>
                <Image
                  height={100}
                  width={640}
                  layout="intrinsic"
                  src="/logo.png"
                  alt="Tashdid"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <div className={Style.navbar}>
                <Navbar.Collapse id="navbarScroll">
                  <Nav navbarScroll>
                    <Link href="/">
                      <h3 className={Style.nav}>Home</h3>
                    </Link>
                    <Link href="/aboutUs">
                      <h3 className={Style.nav}>About Us</h3>
                    </Link>
                    <Link href="/contactUs">
                      <h3 className={Style.nav}>Contact Us</h3>
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Navbar>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
