import { Container, Row, Col } from "react-bootstrap";
import Style from "./footer.module.css";

export default function Footer() {
  return (
    <Container fluid id="contact" className={Style.main}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className={Style.body} data-aos="zoom-in">
              <p className={Style.text}>
                Head Office : Suite-4-5, Level-14, 177 Mahtab Center, Shahid
                Syed Nazrul Islam Sarani,Bijoynagar, Paltan, Dhaka-1000 Ph :
                +8802-58317410, 58317412 Cell : +88 01407-050600, 01678-139546
                E-mail : ehanpackagingindustry@gmail.com, www.ehanpackaging.com
              </p>
              <p className={Style.text}>
                Factory : Kazirgaon Board Press, Matuail, Jatrabari, Dhaka -
                1362
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
