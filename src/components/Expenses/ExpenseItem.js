import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  /*
  let title = props.title;

  const clickHandler = () => {
    console.log("clicked");
    title = "updated!";
    // dom 에 반영되지 않는데. 컴포넌트는 함수형이고 jsx를 반환한다.
    //app.js 부터 시작해서 컴포넌트 (함수)를 랜더를 하고 더이상 반환할 요소가 없으면
    //작동을 멈춘다. 따라서 이렇게 작성할때 업데이트는 이뤄지지 않는다.
  };
  */

  const [title, setTitle] = useState(props.title); // 컴포넌트에서 다이렉트로 호출되어야한다.
  // 컴포넌트 별로 (4번 랜더 되면 4개 생성 ) 독립적인 state를 가지게된다.
  // const 를 사용하는 이유는
  const clickHandler = () => {
    console.log("clicked", title);
    setTitle("updated");
  };

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
