function RoleServiceSpecification({ data }) {
    return (
        <div className="roleServiceSpecification">
            <div className="title">
                RoleService Specification
            </div>
            <div style={{display:"flex"}}>
                <div className="roleServiceSpecification_left" style={{marginRight:"10px"}}>
                    <div className="content_title tasks">
                        Tasks
                    </div>
                    <div className="content_container tasks_content">
                        {data?.taskList?.map((item) => (
                            <div className="content" key={item.task} >{item.task} </div>
                        ))}
                    </div>
                </div>
                <div className="roleServiceSpecification_right">
                    <div className="content_title workflow">
                        Workflow
                    </div>
                    <div className="content_container workflow_content">
                        {data?.workflow?.map((item) => (
                            <div className="content" key={item} >{item} </div>
                        ))}
                    </div>
                    <div className="content_title context">
                        Context
                    </div>
                    <div className="content_container context_content">
                        {data?.contextList?.map((item) => (
                            <div className="content" key={item.context} >{item.context} </div>
                        ))}
                    </div>
                    <div className="content_title knowledge">
                        Knowledge
                    </div>
                    <div className="content_container knowledge_content">
                        {data?.knowledgeList?.map((item) => (
                            <div className="content" key={item.knowledge} >{item.knowledge} </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
      );         
  }
export default RoleServiceSpecification;
