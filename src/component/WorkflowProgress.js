function WorkflowProgress({ data }) {


    return (
        <div className="workflowProgess">
            <div className="grayBox simple_border">
                WorkflowProgress
            </div>
            <div>
                {data?.map((item) => (
                    <div className="simple_border" key={item} >{item} </div>
                ))}
            </div>

        </div>
      );      
  }
export default WorkflowProgress;
