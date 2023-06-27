import React, { Component } from "react";

import CookieCarrier from "./CookieCarrier/index.jsx";
import AutoApprovalForm from "./AutoApprovalForm/index.jsx";

import "./index.less";

export default class App extends Component {
  render() {
    return (
      <div className="chrome-box">
        <CookieCarrier key={"CookieCarrier"} />
        {/*<AutoApprovalForm key={'AutoApprovalForm'}/>*/}
      </div>
    );
  }
}
