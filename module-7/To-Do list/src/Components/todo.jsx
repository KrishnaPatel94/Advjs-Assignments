import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleTodo, remove } from "../Action/index";

function Addclass(props) {
  const [inputData, setInputdata] = useState("");
  const list = useSelector((state) => state.todoreducer.list);
  // console.log(list);
  const dispatch = useDispatch();
  // console.log(dispatch);
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12  p-0">
            <div class="input-group mb-3 d-flex justify-content-center ">
              <div class="container">
                <div class="form">
                  <input
                    type="text"
                    class="input"
                    value={inputData}
                    onChange={(event) => {
                      setInputdata(event.target.value);
                    }}
                  />
                  <input
                    type="submit"
                    class="add"
                    value="Add Task"
                    onClick={() => {
                      dispatch(addToDo(inputData), setInputdata(""));
                    }}
                  />
                </div>
                {list.map((elem) => {
                  return (
                    <div class="tasks">
                      {elem.data}
                      <span>
                        <button
                          onClick={() => {
                            console.log("btn called");
                            dispatch(deleTodo(elem.id));
                          }}
                        >
                          delete
                        </button>
                      </span>
                    </div>
                  );
                })}

                <div class="delete-all" onClick={() => dispatch(remove())}>
                  Delete all
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addclass;
