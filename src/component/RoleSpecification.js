function RoleSpecification({ data }) {
    return (
        <div className="roleSpecification" style={{marginRight:"20px"}}>
            <div className="title">
                RoleSpecification
            </div>
            <div style={{display:"flex"}}>
                <div className="roleSpecification_left " style={{marginRight:"10px"}}>
                    <div className="content_title roleName">
                        Role Name
                    </div>
                    <div className="content_container roleName_content">
                        {data?.roleName}
                    </div>
                    <div className="content_title safety">
                        Safety
                    </div>
                    <div className="content_container safety_content">
                        {data?.safety.map((item) => (
                            <div className="content" key={item} >{item} </div>
                        ))}
                    </div>
                    <div className="content_title permission">
                        Permssion
                    </div>
                    <div className="content_container permission_content">
                        <div className="permission_little_content">
                            Access
                        </div>
                        {data?.permissionRead.length >0 ? (
                            data.permissionRead.map((item) => (
                            <div className="content" key={item}>{item}</div>
                            ))
                            ) : (
                            <div>-</div>
                            )
                        } 
                        <div className="permission_little_content">
                            Modify
                        </div>
                        {data?.permissionChange.length>0 ? (
                            data.permissionChange.map((item) => (
                            <div className="content" key={item}>{item}</div>
                            ))
                            ) : (
                            <div>-</div>
                            )
                        }
                        <div className="permission_little_content">
                            Create
                        </div>
                        {data?.permissionCreate.length>0 ? (
                            data.permissionCreate.map((item) => (
                            <div className="content" key={item}>{item}</div>
                            ))
                            ) : (
                            <div>-</div>
                            )
                        }
                    </div>
                </div>
                <div className="roleSpecification_right">
                    <div className="content_title liveness">
                        Liveness
                    </div>
                    <div className="content_container liveness_content">
                        {data?.liveness.map((item) => (
                            <div className="content" key={item} >{item} </div>
                        ))}
                    </div>
                    <div className="content_title activity&interaction">
                        Activity & Interaction
                    </div>
                    <div className="content_container activity&interaction_content">
                        {data?.interactionsAndActivites.map((item) => (
                            <div className="content" key={item} >{item} </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
      );      
}
export default RoleSpecification;
