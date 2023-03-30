import React from "react";
import "./SectionB.css";
function SectionB(props) {
  return (
    <>
      <div className="space"></div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-xl-6">
            <div className="service">
              <div className="part1"></div>
              <div className="part2">
                <h2>Services</h2>
                <h1>Best solutions for your dream.</h1>
                <div className="box">
                  <div className="icon">
                    <i class="fa-solid fa-house"></i>
                  </div>
                  <div className="dis">
                    <h4>RIESIDENTAL</h4>
                    <p>
                      We provide all materials, labor, equip ensure a safe and
                      secure
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <i class="fa-solid fa-house"></i>
                  </div>
                  <div className="dis">
                    <h4>RIESIDENTAL</h4>
                    <p>
                      We provide all materials, labor, equip ensure a safe and
                      secure
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <i class="fa-solid fa-house"></i>
                  </div>
                  <div className="dis">
                    <h4>RIESIDENTAL</h4>
                    <p>
                      We provide all materials, labor, equip ensure a safe and
                      secure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="img"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionB;
