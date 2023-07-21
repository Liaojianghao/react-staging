import React, { useState, useCallback } from "react";

export default function App() {
  console.log("App渲染");

  const [count, setCount] = useState(1);
  // 增加
  const [num, setNum] = useState(1);

  const clickHandler = useCallback(() => {
    setCount((prevState) => prevState + num);
    // 增加
    setNum((prevState) => prevState + 1);
  }, [num]);

  return (
    <div>
      <h2>App -- {count}</h2>
      <button onClick={clickHandler}>增加</button>
      <A clickHandler={clickHandler} />
    </div>
  );
}

const A = React.memo((props) => {
  console.log("A渲染");
  return (
    <div>
      我是A组件
      <button onClick={props.clickHandler}>A组件的增加</button>
    </div>
  );
});

// useCallback用来缓存函数对象，useMemo用来缓存函数的执行结果