import { Container, Row, Col } from "react-bootstrap";
import Style from "./about.module.css";

export default function About() {
  return (
    <Container fluid id="about" className={Style.main} data-aos="fade-up">
      <Container>
        <Row>
          <Col lg={12}>
            <div className={Style.body}>
              <h1 className={Style.head}>About Us</h1>
              <p className={Style.text}>
                EHAN Packaging Industry Started Its Journey On 2009. One Of The
                Most Successful And Pioneer Businessman In Bangladesh, Engineer
                Md. Saroar Alam Started This Business From Scratch With Only 35
                People With Him. By The Grace Of Allah And Also The Will And
                Extreme Hard Work Of Md. Saroar Alam Made This Company A Huge
                Success. Now More Than 180 Employees Work For EHAN Packaging
                Industry. With 13 Types Of Machineries For Printing And
                Packaging EHAN Packaging Industry Is Serving More Than 100 Loyal
                Customers In All Over Bangladesh. Such As- Perfect Footwear Ltd,
                Pran, RFL, ACI, Fu-Wang Industries, Hashem Foods Ltd And Many
                More. EHAN Packaging Industry Is Continuing To Work For Their
                Customers To Make Their Imagination Into Reality.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
