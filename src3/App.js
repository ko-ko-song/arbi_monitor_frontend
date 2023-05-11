import { useEffect, useState } from "react";

function App() {
  const dataL = [];
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      setDataList((prevData) => [...prevData, receivedData]);
      dataL.push(receivedData);
    };

    return () => {
      socket.close();
    };
  }, []);

  // useEffect(() => {
  //   console.log("App rendered  , data length" + dataL.length);
    
  // });
  return (
    <Parent data={dataList} />
  );
}

function Parent({ data }) {
  // const [parentData, setParentData] = useState([]);
  const [state, setState] = useState(0);
  // useEffect(() => {
  //   setParentData(data);
  // }, [data]);

  useEffect(() => {
    console.log("Parent rendered");
  });
  const handleClick1 = () => {
    setState(0);
  };

  const handleClick2 = () => {
    setState(1);
  };

  const handleClick3 = () => {
    setState(2);
  };



  
  return (
    <div>
      <div>
        <button onClick={handleClick1}>Child1</button>
        <button onClick={handleClick2}>Child2</button>
        <button onClick={handleClick3}>Child3</button>
      </div>
    {state === 0 && <Child className="a" parentData={data} />}
    {state === 1 && <Child className="b" parentData={data} />}
    {state === 2 && <Child className="c" parentData={data} />}
    </div>
  );
}

function Child({ parentData }) {
  const [childData, setChildData] = useState([]);

  // useEffect(() => {
  //   setChildData((prevData) => [...prevData,parentData]);
  //   // console.log(childData);
  // }, [parentData]);

  useEffect(() => {
    console.log("Child rendered");
  });
  
  return (
    <div>
      {parentData.map((item) => (
        <div key={item.timestamp}>{item.timestamp}</div>
      ))}
    </div>
  );
}




export default App;