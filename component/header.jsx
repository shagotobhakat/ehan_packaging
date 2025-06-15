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
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <Container fluid id="home" className={`head ${scrolled ? "new" : ""}`}>
      <Row>
        <Col lg={12}>
          <Navbar
            expanded={expanded}
            onToggle={setExpanded}
            expand="lg"
            className={Style.main}>
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
                  <Link onClick={closeMenu} href="#home">
                    <h3 className={Style.nav}>Home</h3>
                  </Link>
                  <Link onClick={closeMenu} href="#about">
                    <h3 className={Style.nav}>About Us</h3>
                  </Link>
                  <Link onClick={closeMenu} href="#contact">
                    <h3 className={Style.nav}>Contact Us</h3>
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}
