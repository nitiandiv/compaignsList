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
          width: "100%",
          display: "flex",
          flexDirection: "column",
         // border:'1px solid black'
         alignItems:'center',
        // justifyContent:'center'
        height:'100%'
        }}
      >
        <div 
        style={{
          width: "80%",
          height:'100%'
        }}
        >
        <div
        style={{height:'20%',fontSize:30,display: "flex",alignItems:'center',fontWeight:800,color:'#2A3D6E'}}>
          Manage Campaigns
          </div>
        <div style={{height:'10%'}}>
          <MyTab 
            tabList={tabList}
            currentTab={this.state.currentTab}
            handleTabEvent={item=>this.setState({currentTab:item})}
          />
        </div>
        <div style={{height:'70%'}}>
          <Table />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
