function PermittedContext({ data }) {
    return (
        <div className="permittedContext">
            <div className="content_title">
                PermittedContext
            </div>
            <div className="content_container">
                {data?.map((item) => (
                    <div className="content" key={item} >{item} </div>
                ))}
            </div>
        </div>
      );      
  }
export default PermittedContext;
