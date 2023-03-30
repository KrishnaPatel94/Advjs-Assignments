import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostApiAction, UpdateApiAction } from "../Action/Action";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import GetDetialsId from "../GetHooks/getDetials";
function Update(props) {
  const { id } = useParams();
  console.log("get__", id);
  const [name, setname] = useState("");

  const [email, setemail] = useState("");

  const [country, setcountry] = useState("");
  const dispatch = useDispatch();
  //   const isUpdate = useSelector((state) => state.reducer.isUpdate);

  const [getDetails] = GetDetialsId(id);
  console.log("data is ....", getDetails);
  useEffect(() => {
    const data = () => {
      if (getDetails.data) {
        setname(getDetails.data.name);
        setemail(getDetails.data.email);
        setcountry(getDetails.data.country);
      }
    };
    data();
  }, [getDetails.data]);
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
    dispatch(UpdateApiAction(Finaldata, id));
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
                            defaultValue={name}
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
                            defaultValue={email}
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
                            defaultValue={country}
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

export default Update;
