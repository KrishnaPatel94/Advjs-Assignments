import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { PostApiAction } from "../Action/Action";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
function Rig(props) {
  const [name, setname] = useState("");

  const [email, setemail] = useState("");

  const [country, setcountry] = useState("");
  const dispatch = useDispatch();

  const nameHandler = (e) => {
    setname(e.target.value);
  };
  const emailHandler = (e) => {
    setemail(e.target.value);
  };
  const countryHandler = (e) => {
    setcountry(e.target.value);
  };
  const ClickHandler = (e) => {
    e.preventDefault();
    console.log("btn called");
    const Finaldata = {
      name: name,
      email: email,
      country: country,
    };
    dispatch(PostApiAction(Finaldata));
  };
  return (
    <>
      <div>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <Card className="px-4">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                      Logo
                    </h2>
                    <div className="mb-3">
                      <Form method="post">
                        <Form.Group className="mb-3" controlId="Name">
                          <Form.Label className="text-center">Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            onChange={(e) => nameHandler(e)}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => emailHandler(e)}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Country</Form.Label>
                          <Form.Control
                            type="name"
                            placeholder="Country"
                            onChange={(e) => countryHandler(e)}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        ></Form.Group>
                        <div className="d-grid">
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={(e) => ClickHandler(e)}
                          >
                            Add
                          </Button>
                        </div>
                      </Form>
                      {/* <div className="mt-3">
                        <p className="mb-0  text-center">
                          Already have an account??{" "}
                          <a href="{''}" className="text-primary fw-bold">
                            Sign In
                          </a>
                        </p>
                      </div> */}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Rig;
