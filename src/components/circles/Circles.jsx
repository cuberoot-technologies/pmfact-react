import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Card from "react-bootstrap/Card";

const Circles = () => {
  return (
    <>
      <div className="mps ">
        <div className="container res-desk">
          <div className="circles">
            <div className="all-cicle">
              <div className="circle-first">
                <div style={{ width: 300, height: 300 }}>
                  <CircularProgressbar
                    value={80}
                    styles={buildStyles({
                      rotation: 0.5,
                      textSize: "16px",
                      textColor: "#f88",
                    })}
                  />
                </div>
              </div>
              <div className="circle-sec">
                <div style={{ width: 240, height: 240 }}>
                  <CircularProgressbar
                    value={46}
                    styles={buildStyles({
                      rotation: 0.5,
                      textSize: "16px",
                      textColor: "#f88",
                    })}
                  />
                </div>
              </div>
              <div className="circle-th">
                <div style={{ width: 180, height: 180 }}>
                  <CircularProgressbar
                    value={33}
                    styles={buildStyles({
                      rotation: 0.5,
                      textSize: "16px",
                      textColor: "#f88",
                    })}
                  />
                </div>
              </div>
              <div className="circle-for">
                <div style={{ width: 120, height: 120 }}>
                  <CircularProgressbar
                    value={66}
                    styles={buildStyles({
                      rotation: 0.5,
                      textSize: "16px",
                      textColor: "#f88",
                    })}
                  />
                </div>
              </div>
              <div className="circle-fiv">
                <div style={{ width: 70, height: 70 }}>
                  <CircularProgressbar
                    value={56}
                    styles={buildStyles({
                      rotation: 0.5,
                      textSize: "16px",
                      textColor: "#f88",
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="all-circle-details">
              <p>
                <span className="cir-de-f"></span> Attendence
              </p>
              <p>
                <span className="cir-de-s"></span> Ques
              </p>

              <p>
                <span className="cir-de-th"></span> Debates
              </p>
              <p>
                <span className="cir-de-for"></span> PMB
              </p>
              <p>
                <span className="cir-de-fiv"></span> MP Fund
              </p>
            </div>
          </div>
          <div className="homechart">
            <div className="container">
              <div className="row">
                <div className="cards">
                  <Card>
                    <Card.Body>
                      <Card.Title>52.25%</Card.Title>
                      <Card.Text>Att.</Card.Text>
                      <span>Attendence</span>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <Card.Title>52.25%</Card.Title>
                      <Card.Text>Att.</Card.Text>
                      <span>Attendence</span>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <Card.Title>52.25%</Card.Title>
                      <Card.Text>Att.</Card.Text>
                      <span>Attendence</span>
                    </Card.Body>
                  </Card>

                  <Card>
                    <Card.Body>
                      <Card.Title>52.25%</Card.Title>
                      <Card.Text>Att.</Card.Text>
                      <span>Attendence</span>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <Card.Title>52.25%</Card.Title>
                      <Card.Text>Att.</Card.Text>
                      <span>Attendence</span>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <Card.Title>52.25%</Card.Title>
                      <Card.Text>Att.</Card.Text>
                      <span>Attendence</span>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Circles;
