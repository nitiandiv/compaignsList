import React, { Component } from "react";
import Table from "./dashboard/table/Table";
import MyTab from "./dashboard/tab/MyTab";
import tabList from "./static/tabList";
import "./App.css";


class App extends Component {
  state={
    currentTab:'upcoming'
  }
  render() {
    
    return (
      <div
        style={{
          width: "80vw",
          display: "flex",
          flexDirection: "column",
         // border:'1px solid black'
        }}
      >
        <div
        style={{height:80,}}>
          Manage Campaigns
          </div>
        <div>
          <MyTab 
            tabList={tabList}
            currentTab={this.state.currentTab}
            handleTabEvent={item=>this.setState({currentTab:item})}
          />
        </div>
        <div>
          <Table />
        </div>
      </div>
    );
  }
}

export default App;
