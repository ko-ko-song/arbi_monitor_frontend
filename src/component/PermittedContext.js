function PermittedContext({ data }) {
    return (
        <div className="permittedContext">
            <div className="grayBox simple_border">
                PermittedContext
            </div>
            <div>
                {data?.map((item) => (
                    <div className="simple_border" key={item} >{item} </div>
                ))}
            </div>
        </div>
      );      
  }
export default PermittedContext;
