import { useEffect, useState } from "react";
import Child from './Child';

function Parent({ data }) {
    const [parentData, setParentData] = useState([]);
    useEffect(() => {
      setParentData(data); // 예시로 상위 10개 데이터만 사용
      // console.log(`Parent : ${parentData}`)
    }, [data]);
  
    useEffect(() => {
      console.log("Parent rendered");
    });

    return (
      <Child parentData={parentData} />
    );
  }

  export default Parent;