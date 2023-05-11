import { useEffect, useState } from "react";
import Grandchild from './GrandChild';

function Child({ parentData }) {
    const [childData, setChildData] = useState([]);
  
    useEffect(() => {
      setChildData(parentData); // 예시로 id만 사용
      // console.log(`child : ${childData}`);
    }, [parentData]);
  
    useEffect(() => {
      console.log("Child rendered");
    });

    return (
      <div>
      {childData.length >0 ? 
        (<div>
        {childData.map((item) => (
          <Grandchild key={item.timestamp} data={item} />
        ))}
        </div>) : (
          <div>1</div>
        )}
      </div>  
    );

  }

  export default Child;