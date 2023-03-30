import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetApiAction, PostApiAction, DelApiAction } from "../Action/Action";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetApiAction());
  }, [dispatch]);

  const responsedata = useSelector((state) => state.reducer.details);
  const isDELETEResponse = useSelector(
    (state) => state.reducer.isDELETEResponse
  );
  console.log(responsedata);

  const navigate = useNavigate();

  function handleclick() {
    navigate("/Rig");
  }
  // function handleclick1() {
  //   navigate("/Update");
  // }

  const result = responsedata
    ? responsedata.map((data, index) => {
        return (
          <tr key={index}>
            <th>{data.id}</th>
            <th>{data.name}</th>
            <th>{data.email}</th>
            <th>{data.country}</th>
            <th>
              <button
                onClick={() => {
                  console.log("btn called");
                  dispatch(DelApiAction(data.id));
                }}
              >
                delete
              </button>
            </th>
            <th>
              <Link to={`/Update/${data.id}`}>
                <button>Edite</button>
              </Link>
            </th>
          </tr>
        );
      })
    : null;

  if (isDELETEResponse) {
    window.location.reload();
  }
  return (
    <div className="container text-center">
      <h1 className="text-danger">WELECOME TO CRUD APP</h1>
      <button onClick={handleclick}>add</button>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Delete</th>
            <th>Edite</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
    </div>
  );
}

export default Home;
