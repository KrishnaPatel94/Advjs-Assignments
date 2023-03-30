import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SectionB from "../section-b/Section-B";
import { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";

function CollapsibleExample() {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("black") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("6rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <>
      {" "}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        AutoPLay
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide>
          <div className="card">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 ">
                  <div className="detial">
                    <h4>RUSTIC INTERIOR STUDIO</h4>
                    <h1>RUSTC AND MORDEN</h1>
                    <button type="button" class="btn btn-primary btn-lg">
                      MORE AOBUT US
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card1">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 ">
                  <div className="detial">
                    <h4>RUSTIC INTERIOR STUDIO</h4>
                    <h1>RUSTC AND MORDEN</h1>
                    <button type="button" class="btn btn-primary btn-lg">
                      MORE AOBUT US
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="main"
          style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s",
          }}
        >
          <Container>
            <Navbar.Brand href="#home">
              <div className="logo">
                <img
                  src="https://rustic.jamstacktemplates.dev/images/logo/logo.png?imwidth=96"
                  alt=""
                />
              </div>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="bg">
              <Nav className="me-auto">
                <Nav.Link href="#features" className="font text-white">
                  Home
                </Nav.Link>
                <Nav.Link href="#pricing" className="font text-white">
                  AboutUs
                </Nav.Link>
                <Nav.Link href="#features" className="font text-white">
                  Projects
                </Nav.Link>
                <Nav.Link href="#pricing" className="font text-white">
                  Posts
                </Nav.Link>
                <Nav.Link href="#pricing" className="font text-white">
                  Contents
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">ENG</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  FRC
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Swiper>
      <SectionB />
    </>
  );
}

export default CollapsibleExample;
