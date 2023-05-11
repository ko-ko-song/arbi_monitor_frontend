// App.js
import React, { useState, useEffect } from "react";
import AgentData from "./component/AgentData";
import SemanticMapData from "./component/SematicMapData";
import RoleAssignData from "./component/RoleAssignData";
import RootsData from "./component/RootsData";
import Agent from "./class/Agent";
import Role from "./class/Role";

const WebSocketURL = "ws://127.0.0.1:42000"; // 웹 소켓 URL을 입력하세요.



const App = () => {
  const [selectedTab, setSelectedTab] = useState("Agent");
  const [agentsData, setAgentsData] = useState(new Map());
  const [rootsData, setRootsData] = useState([]);
  const [roleAsginData, setRoleAsignData] = useState([]);
  const [semanticMapData, setSemanticMapData] = useState([]);
  const [roleData, setRoleData] = useState(new Map());
  // const [dataMap, setDataMap] = useState(new Map());
  const tabList = ["Agent", "RoOTS 변환", "Role 할당 과정", "SemanticMap"];

  useEffect(() => {
    const socket = new WebSocket(WebSocketURL);
    socket.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      parseJSONMessage(receivedData);
      // setAgentsData((prevData) => ([...prevData, receivedData]))
  };
    

  return () => {
    socket.close();
  };

  }, []);

  useEffect(()=>{
    console.log("App rendered");
  });

  
  /**
   * UnpostGoal, IntendGoal, MonitorAgent, AssignRole, RoleSpecification만 파싱중
   * 
   * @param {*} receivedMessage 
   */
  const parseJSONMessage = (receivedMessage) =>{
    console.log(receivedMessage);
    if(receivedMessage.Type==="SystemLog"){
      // console.log(receivedMessage);
      let action = receivedMessage.Action;
      let content = receivedMessage.Content;
      // console.log(content)
      if(action==="UnpostGoal"){
        let agentName = content.agentName;
        let goalName = content.goalName;
        let time = content.time;
        setAgentsData(prevData => {
          const newMap = new Map(prevData);
          let agentData = newMap.get(agentName);
          if(agentData!=undefined){
            const goal = {
              goalName: goalName,
              time: time
            }
            agentData.achievedGoalHistory.push(goal);
            if(agentData.intentionStructure.includes(goalName)){
              let index = agentData.intentionStructure.indexOf(goalName);
              agentData.intentionStructure.splice(index,1);
            }
          }
          else{
            console.log(`undfined agent name : ${agentName}`);
          }
          return newMap;
        });
      }else if (action === "IntendGoal") {
        console.log('content  ' + content);
        let agentName = content.agentName;
        let goalName = content.goalName;
        setAgentsData(prevData => {
          const newMap = new Map(prevData);
          let agentData = newMap.get(agentName);
          if (agentData != undefined) {
            agentData.intentionStructure.push(`${goalName}`);
          } else {
            console.log(`undfined agent name : ${agentName}`);
          }
          return newMap;
        });
      } else if (action === "MonitorAgent") {
        let agentName = content;
        setAgentsData(prevData => {
          const newMap = new Map(prevData);
          newMap.set(agentName, new Agent());
          return newMap;
        });
      } else if (action === "RoleSpecification") {
        if (content.roleList != undefined) {
          content.roleList.forEach(role => {
            const newRole = new Role();
            newRole.permssionRead = role.permssionRead;
            newRole.safety = role.safety;
            newRole.skill = role.skill;
            newRole.roleName = role.roleName;
            newRole.liveness = role.liveness;
            newRole.permissionCreate = role.permissionCreate;
            newRole.permissionChange = role.permissionChange;
            newRole.interactionsAndActivites = role.interactionsAndActivites;
            setRoleData(prevData => {
              const newMap = new Map(prevData);
              newMap.set(newRole.roleName, newRole);
              return newMap;
            });
          });
        }
      } else if(action === "AssignRole"){
        let agentName = content.agentName;
        let roleName = content.roleName;
        setAgentsData(prevData => {
          const newMap = new Map(prevData);
          let agentData = newMap.get(agentName);
          console.log(agentData);
          setRoleData(prevRoleData => {
            const newMap = new Map(prevRoleData);
            let role = newMap.get(roleName);
            console.log(newMap);
            console.log(role);
            if(agentData != undefined && role != undefined){
              let permittedContext = [];
              let safety = [];
              let workflow = [];
              permittedContext.push(...role.permissionCreate);
              permittedContext.push(...role.permissionChange);
              safety.push(...role.safety);
              workflow.push(...role.liveness);
  
              agentData.permittedContext = permittedContext;
              agentData.safety = safety;
              agentData.workflow = workflow;
              agentData.assignedRole = role.roleName;
            }
            return newMap;
          });
          return newMap;
        });
      }else {
        console.log(`undefined action : ${action}`);
        
      }
    }
    else if(receivedMessage.Type==="MessageLog"){
    }
    else{
      console.log('undefined message type');
      // console.log(receivedMessage);
    }
  }

 
  return (
    <div>
      <nav className="nav_bar">
        {tabList.map((tab) => (
          <button key={tab} onClick={() => setSelectedTab(tab)}>
            {tab}
          </button>
        ))}
      </nav> 
      {selectedTab === "Agent" && <AgentData agentsData={agentsData}/>}
      {selectedTab === "RoOTS 변환" && <RootsData />}
      {selectedTab === "Role 할당 과정" && <RoleAssignData />}
      {selectedTab === "SemanticMap" && <SemanticMapData />}
      {/* <TabData dataList={dataMap.get(selectedTab) || []} /> */}
    </div> 
  );
};












export default App;
