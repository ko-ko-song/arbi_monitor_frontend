function IntentionStructure({ data }) {
    return (
        <div className="intentionStructure">
            <div className="grayBox simple_border">
                IntentionStructure
            </div>
            <div className="scroll-container-a">
                {data?.map((item) => (
                    <div className="simple_border" key={item} >{item} </div>
                ))}
            </div>

        </div>
      );      
  }
export default IntentionStructure;
