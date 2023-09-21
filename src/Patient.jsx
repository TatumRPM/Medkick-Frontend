import { useState } from "react";
import swap from "./assets/Swap.png";
import filterColor from "./assets/FilterColor.png";
import Calling from "./assets/Calling.png";
import Chat from "./assets/Chat.png";
import dots from "./assets/dots.png";
import trash from "./assets/trash.png";
import edit from "./assets/edit-2.png";
import archive from "./assets/archive.png";
import heart from "./assets/heart-attack.png";
import bp from "./assets/bp.png";
import lungs from "./assets/lungs.png";
import bodyScale from "./assets/body-scale.png";
import temperature from "./assets/temperature.png";
import arrowDown from "./assets/Arrow - Down 2.png";
import Upload from "./assets/Upload.png";
import "./Patients.css";


function Patient(props){

    const[allCheck,setAllCheck] = useState(false);
    
    let data = [
      {
        name: "Thomas Schnieder",
        heart: 120,
        BP: 120,
        Lungs: "79%",
        bodyScale: 120,
        temperature: 104,
        Readings: 112,
        LastReading: "04/06/2023",
      },
      {
        name: "Millie Bell",
        heart: 120,
        BP: 120,
        Lungs: "79%",
        bodyScale: 120,
        temperature: 104,
        Readings: 49,
        LastReading: "04/06/2023",
      },
      {
        name: "Jordan Antoine",
        heart: 120,
        BP: 120,
        Lungs: "79%",
        bodyScale: 120,
        temperature: 104,
        Readings: 49,
        LastReading: "04/06/2023",
      },
      {
        name: "Mildred Pearson",
        heart: 120,
        BP: 120,
        Lungs: "79%",
        bodyScale: 120,
        temperature: 104,
        Readings: 112,
        LastReading: "04/06/2023",
      },
      {
        name: "Sai Kapur",
        heart: 120,
        BP: 120,
        Lungs: "79%",
        bodyScale: 120,
        temperature: 104,
        Readings: 49,
        LastReading: "04/06/2023",
      },
      {
        name: "Gabin Martinez",
        heart: 120,
        BP: 120,
        Lungs: "79%",
        bodyScale: 120,
        temperature: 104,
        Readings: 112,
        LastReading: "04/06/2023",
      },
      {
        name: "Aimee Brown",
        heart: 120,
        BP: 120,
        Lungs: "79%",
        bodyScale: 120,
        temperature: 104,
        Readings: 112,
        LastReading: "04/06/2023",
      },
      {
        name: "Mason Walker",
        heart: 120,
        BP: 120,
        Lungs: "79%",
        bodyScale: 120,
        temperature: 104,
        Readings: 112,
        LastReading: "04/06/2023",
      },
      {
        name: "Sophie Pohl",
        heart: 120,
        BP: 120,
        Lungs: "79%",
        bodyScale: 120,
        temperature: 104,
        Readings: 49,
        LastReading: "04/06/2023",
      },
    ];


    const showFilterPop=function(popUpName){
      if(document.getElementById(popUpName).style.visibility=="visible"){
        document.getElementById(popUpName).style.visibility="hidden";
        return;
      }
      document.getElementById(popUpName).style.visibility="visible";
    }

    const showPopUp=function(index){
        if (document.getElementById('popUp'+index).style.visibility=="visible") {
            document.getElementById('popUp'+index).style.visibility="hidden";
            return;
        }
        document.getElementById('popUp'+index).style.visibility="visible";
    }

    const showPop=function(){
      document.getElementById("EditUser").style.visibility = "visible";
      document.getElementById("shadow").style.visibility="visible";
    }
    return (
      <div className="list">
        <div
          className="filter-container"
          style={{ justifyContent: "space-between" }}
        >
          <div style={{ display: "flex", flexDirection: "row", width: "50%" }}>
            <div
              style={{
                width: "50%",
                marginRight: "20px",
                position: "relative",
              }}
            >
              <button
                className="secondaryButton"
                onClick={() => showFilterPop("filter1")}
              >
                Organization{" "}
                <img
                  src={arrowDown}
                  style={{ marginLeft: "40px", rotate: "180deg" }}
                />
              </button>
              <div className="filter-popUp" id="filter1">
                Medical Associates of Highland
              </div>
            </div>
            <div
              style={{
                width: "7%",
                marginRight: "20px",
                position: "relative",
              }}
            >
              <button
                className="filterBtn"
                style={{ width: "100%" }}
                onClick={() => showFilterPop("filter2")}
              >
                <img src={filterColor} width={20} height={20} />
              </button>
              <div
                className="filter-popUp"
                id="filter2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "80px",
                  width: "150px",
                  padding: "60px 0",
                }}
              >
                RPM
                <br />
                <hr style={{ width: "80%" }} color="#DBDADD" />
                CCM
                <br />
              </div>
            </div>
            <div style={{ width: "7%" }}>
              <button className="filterBtn">
                <img src={Upload} width={20} height={20} />
              </button>
            </div>
          </div>
          <div
            className="col-md-6"
            style={{
              margin: "10px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <div
              className="col-md-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                marginRight: "10px",
              }}
            >
              <p style={{ margin: 0 }}>No. of patients per page</p>
            </div>
            <div className="col-md-2 select-wrapper3">
              <select name="DeviceList" className="" id="MobileNumber">
                <option value="0">100</option>
                <option value="1">150</option>
                <option value="1">200</option>
                <option value="1">250</option>
              </select>
            </div>
          </div>
        </div>

        <br />
        <div className="list-header">
          <div
            style={{
              padding: "15px 30px",
              borderRadius: "20px 20px 0 0",
              backgroundColor: "#E9EBEA",
              borderL: "1px solid #EFEEF1",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className="checkbox-wrapper">
              <label
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <input
                  type="checkbox"
                  className={allCheck ? "checked" : "unChecked"}
                  onChange={(check) => setAllCheck((check) => !check)}
                />
              </label>
            </div>

            <div
              style={{
                fontSize: "16px",
                fontWeight: "600",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",

                width: "19.5%",
              }}
            >
              Name
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "600",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "40%",
              }}
            >
              Devices{" "}
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "600",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "10%",
              }}
            >
              Readings{" "}
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "600",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "10%",
              }}
            >
              Last Reading{" "}
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "600",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "10%",
              }}
            ></div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "600",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "5%",
              }}
            >
              <span
                style={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <img src={dots} alt="" width={24} height={24} />
              </span>
            </div>
          </div>
          {/* Header End */}
          {/* Data Start */}
          <div style={{ overflowY: "scroll" }}>
            <div style={{}}>
              {data.map((datas, index) => (
                <div className="list-data">
                  <div
                    className="checkbox-wrapper"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        className={allCheck ? "checked" : "unChecked"}
                        onChange={(check) => setAllCheck((check) => !check)}
                        onClick={() => {
                          props.showPatientView();
                        }}
                      />
                    </label>
                  </div>

                  <div id="name" className="list-name">
                    <div>{datas.name}</div>
                    <div className="icon-text">F10.1. 134.9</div>
                  </div>
                  <div id="devices" className="devices">
                    {/* Heart Reading */}
                    <div className="icon-container">
                      <img src={heart} width={24} height={24} alt="" />
                      <div className="icon-text">{datas.heart}</div>
                    </div>
                    {/* BP Reading */}
                    <div className="icon-container">
                      <img src={bp} width={24} height={24} alt="" />
                      <div className="icon-text">{datas.BP}</div>
                    </div>
                    {/* Lungs */}
                    <div className="icon-container">
                      <img src={lungs} width={24} height={24} alt="" />
                      <div className="icon-text">{datas.Lungs}</div>
                    </div>
                    {/* Body Scale */}
                    <div className="icon-container">
                      <img src={bodyScale} width={24} height={24} alt="" />
                      <div className="icon-text">{datas.bodyScale}</div>
                    </div>
                    {/* Temperature */}
                    <div className="icon-container">
                      <img src={temperature} width={24} height={24} alt="" />
                      <div className="icon-text">{datas.temperature}</div>
                    </div>
                  </div>
                  <div
                    className="readings"
                    style={{
                      width: "10%",
                      color: `${datas.Readings > 100 ? "#1FBE05" : "#FF0005"}`,
                    }}
                  >
                    {datas.Readings}
                  </div>
                  <div style={{ width: "10%" }} className="readings">
                    {datas.LastReading}
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "10%",
                    }}
                  >
                    <span style={{ cursor: "pointer" }}>
                      <img src={Calling} alt="" width="16px" height="16px" />
                    </span>
                    <span style={{ marginLeft: "20px", cursor: "pointer" }}>
                      <img src={Chat} alt="" width="16px" height="16px" />
                    </span>
                  </div>
                  <div
                    style={{
                      width: "5%",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        position: "relative",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <img
                        style={{ cursor: "pointer" }}
                        src={dots}
                        alt=""
                        width={24}
                        height={24}
                        onClick={() => showPopUp(index)}
                      />
                      <div
                        id={`popUp${index}`}
                        key={index}
                        style={{
                          position: "absolute",
                          padding: "10px 20px",
                          backgroundColor: "white",
                          display: "flex",
                          top: "25px",
                          flexDirection: "column",
                          borderRadius: "10px",
                          boxShadow: "0 0 5px 0px rgba(182, 169, 169, 0.25)",
                          width: "150px",
                          visibility: "hidden",
                          zIndex: `${index + 5}`,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            fontSize: "14px",
                            alignItems: "center",
                            width: "100%",
                            borderBottom: "2px solid #DADADA",
                            padding: "5px 0",
                          }}
                        >
                          <img
                            src={trash}
                            alt=""
                            width="15px"
                            height="15px"
                            style={{ marginRight: "5px", color: "#FF0000" }}
                          />
                          Delete
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            fontSize: "14px",
                            alignItems: "center",
                            width: "100%",
                            borderBottom: "2px solid #DADADA",
                            padding: "10px 0",
                          }}
                        >
                          <img
                            src={archive}
                            alt=""
                            width="15px"
                            height="15px"
                            style={{ marginRight: "5px" }}
                          />
                          Archive
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            fontSize: "14px",
                            alignItems: "center",
                            width: "100%",
                            padding: "10px 0",
                            cursor: "pointer",
                            zIndex: "60",
                          }}
                          onClick={() => showPop()}
                        >
                          <img
                            src={edit}
                            alt=""
                            width="15px"
                            height="15px"
                            style={{ marginRight: "5px" }}
                          />
                          Edit
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );

}

export default Patient;