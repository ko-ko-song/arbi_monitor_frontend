import { useEffect, useState } from "react";
import WorkflowProgress from "./WorkflowProgress";
import PermittedContext from "./PermittedContext";
import AchievedGoalHistory from "./AchievedGoalHistory";
import Agent from "../class/Agent";
import IntentionStructure from "./IntentionStructure";

function AgentData({ agentsData }) {
    const [selectedAgent, setSelectedAgent] = useState();
    const [selectedAgentData, setSelectedAgentData] = useState(new Agent());

    useEffect(() => {
        const agentData = agentsData?.get(selectedAgent);
        if(agentData==undefined || Array.from(agentsData?.keys() || []) == undefined || selectedAgentData ==undefined){
            return;
        }
        setSelectedAgentData(agentData);
      }, [selectedAgent, agentsData]);
 
    return (
        <div className="agentsData">
            <div className="pos_12" style={{marginRight:"10px", minwidth:"15%", height:"100%"}}>
                <div className="pos_1" style={{marginBottom:"50%"}}>
                    <div className="agentTabList">
                        {Array.from(agentsData?.keys() || []).map((item) => (
                            <div className="agentTab simple_border grayBox" key={item} onClick={()=>setSelectedAgent(item)}>{item}</div>
                        ))}
                    </div>
                </div>
                <div className="pos_2">
                    <div className="assignedRoleComponent">
                        <div className="grayBox simple_border">assignedRole</div>
                        <div className="assignedRole">{selectedAgentData.assignedRole}</div>
                    </div>
                </div>
            </div>
            <div className="pos_345678" style={{display: "flex", minWidth:"85%", height:"100%"}}>
                <div className="pos_3" style={{marginRight:"15px", minWidth:"15%", height:"100%"}}>
                    <WorkflowProgress data={selectedAgentData.workflow}/>
                </div>
                <div className="pos_45678" style={{minWidth:"30%", height:"100%"}}>
                    <div className="pos_45" style={{display: "flex", height:"30%"}}>
                        <div className="pos_4" style={{marginRight:"15px", minWidth:"40%"}}>
                            <IntentionStructure data={selectedAgentData.intentionStructure}/>
                        </div>
                        <div className="pos_5" >
                            <PermittedContext data={selectedAgentData.permittedContext}/>
                        </div>
                    </div>
                    <div className="pos_6" style={{height:"60%"}}>
                        <AchievedGoalHistory data={selectedAgentData.achievedGoalHistory}/>

                    </div>
                    <div className="pos_78" style={{display: "flex", minWidth:"50%", height:"10%"}}>
                        <div className="pos7">
                            <div className="content_title">Policy</div>
                            <div className="content_container">
                                {selectedAgentData?.policy?.length > 0 ? (
                                    selectedAgentData.policy.map((item)=>(
                                        <div key={item} className="content"> {item} </div> 
                                    ))
                                    ) : (<div> - </div>)
                                }
                            </div>
                        </div>
                        <div className="pos_8">
                            <div className="content_title">Safety</div>
                            <div className="content_container">
                                {selectedAgentData?.safety?.length > 0 ? (
                                    selectedAgentData.safety.map((item)=>(
                                        <div key={item} className="content"> {item} </div>
                                    ))
                                    ) : (<div> - </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
      );      
  }
export default AgentData;
