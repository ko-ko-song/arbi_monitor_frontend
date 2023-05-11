function AchievedGoalHistory({ data }) {
    return (
        <div className="achieveGoalHistory">
            <div className="grayBox simple_border">
                AchievedGoalHistory     
            </div>
            <div className="scroll-container-b">
                {data?.map((item) => (
                    <div className="simple_border" key={item.time} >{item.goalName}  
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {item.time}
                    </div>
                ))}
            </div>
        </div>
      );      
  }
export default AchievedGoalHistory;

