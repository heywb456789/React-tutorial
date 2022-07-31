import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   entertedTitle: e.target.value,
    // }); //동시에 접근하지만 호출할때마다 기존꺼를 넣어줘야한다 아니면 초기화

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // }); // 초기의 state 스냅샷을 한 다음 업데이트
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   entertedAmount: e.target.value,
    // });
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   entertedDate: e.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // 기본 요청이 보내지는것을 막는다.

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    props.onSaveExpenseData(expenseData); //부모에서 함수를 선언해서 자식으로 전달하여 자식이 포인트된 함수를 사용하여 이용

    //양방향 바인딩 입력후 클리어
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
