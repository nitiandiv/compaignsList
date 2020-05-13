import React, { Component } from "react";
import "./myTabStyle.scss";

class MyTab extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          margin: "0 0 20px 0",
          borderBottom:'1px solid #F1F1F4'
        }}
      >
        {this.props.tabList.map((tabItem,indx) => (
          <div key={indx}
            className={
              this.props.currentTab === tabItem.value
                ? "selected-tab common-tab"
                : "unselected-tab common-tab"
            }
            onClick={()=>this.props.handleTabEvent(tabItem.value)}
          >
            {tabItem.label}
          </div>
        ))}
      </div>
    );
  }
}

export default MyTab;
