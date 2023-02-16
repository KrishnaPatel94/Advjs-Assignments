import React from "react";
import { useLayoutEffect, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const theme = {
  light: {
    fg: "red",
    bg: "lightblue",
  },
};

const myContext = React.createContext(theme.light);

function FuncAPI(props) {
  const mythemes = useContext(myContext);
  const [data, setdata] = useState({});
  const [loader, setloader] = useState("loading. . .");

  useLayoutEffect(() => {
    setTimeout(() => {
      setloader("data found");
    }, 3000);
  });

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res) => res.json())
        .then((Response) => {
          console.log(Response);
          setdata(Response);
        })
        .catch((Error) => {
          console.log(Error);
        });
    }, 2000);
  });

  return (
    <div>
      <h1>{loader}</h1>
      <div className="contaion">
        <div className="row mt-5">
          <div className="col">
            <table style={{ background: mythemes.bg, color: mythemes.fg }}>
              <thead>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Body</th>
              </thead>
              {Object.entries(data).map((res, i) => {
                return (
                  <>
                    <tbody>
                      <tr>
                        <td key={i}>{res[1].id}</td>
                        <td key={i}>{res[1].name}</td>
                        <td key={i}>{res[1].body}</td>
                      </tr>
                    </tbody>
                  </>
                );
              })}
            </table>
            {Object.entries(data).map((res, i) => {
              return <></>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FuncAPI;
