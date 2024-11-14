import React, { useEffect, useState } from "react";
import "../assets/css-me/css-me.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { json } from "react-router-dom";
const Welcome = () => {
  const [showWelcomeMessage, setShowWelcomeMessage] = useState();
  useEffect(() => {
   const data =localStorage.getItem("show_app_intru");
   setShowWelcomeMessage(JSON.parse(data) ?? true)
  }, []);
  const onHideMessageWelcome = () => {
    setShowWelcomeMessage(false);
    localStorage.setItem("show_app_intru", JSON.stringify(false));
  };
  return (
    <React.Fragment>
      {showWelcomeMessage && (
        <div className="container mt-3 bg-primary ">
          <div className=" bg-primary text-white  ">
            <FontAwesomeIcon
              icon={faClose}
              style={{ float: "right", margin: "5px" }}
              onClick={onHideMessageWelcome}
            />
          </div>
          <div className="p-4">Welcome</div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Welcome;
