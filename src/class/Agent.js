class Agent {
  constructor() {
    this.workflow = [];
    this.intentionStructure = [];
    this.achievedGoalHistory = [];
    this.permittedContext = [];
    this.role = [];
    this.assignedRole = '';
    this.policy = [];
    this.safety = [];
  }
}
 
export default Agent;