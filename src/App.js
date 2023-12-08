import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureLow,
  faBell,
  faDroplet,
  faLightbulb,
  faVolumeHigh,
  faTriangleExclamation,
  faIndustry,
  faOilCan,
  faBellSlash
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function App() {

  const [on, setOn] = useState(false)

  return (
    <div className="App">
      <div
        style={{
          width: "80%",
          marginLeft: "7%",
          border: "3px solid red",
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        <header style={{ fontSize: "50px", color: "#7b4425" }}>
          SMART HOUSE
        </header>
        <div style={{ display: "flex" }}>
          <div className="container">
            <div className="blockContent">
              <div className="nhietDo">Cảnh báo</div>
              {/* <div className="nhietDo">33.3 C</div> */}
              <FontAwesomeIcon className="icon" icon={faTriangleExclamation} />
            </div>
            <div className="iconContent">
              <div style={{ fontSize: "25px", padding: "10px" }}>
                Công tắc báo động
              </div>
              <FontAwesomeIcon className="iconLight" icon={on == false ? faBellSlash : faBell} />

              <div style={{ gap: "10px" }}>
                <button className="lightButton" onClick={ () => setOn(true)}>On</button>
                <button className="lightButton" onClick={() => setOn(false)}>Off</button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="blockContent">
              <div className="nhietDo">Khí gas</div>
              {/* <div className="nhietDo">70%</div> */}
              <FontAwesomeIcon
                className="icon"
                style={{ color: "black" }}
                icon={faOilCan}
              />
            </div>
            <div className="iconContent">
              <div style={{ fontSize: "25px", padding: "10px" }}>
                {" "}
                Công tắc báo động
              </div>
              {/* <FontAwesomeIcon className="iconLight" icon={faBell} /> */}
              <div style={{ gap: "10px" }}>
                <button className="lightButton">On</button>
                <button className="lightButton">Off</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
