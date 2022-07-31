import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const ex_expense = [
  { id: "e1", title: "Toilet Paper", amount: 10, date: new Date(2021, 3, 12) },
  { id: "e2", title: "Pencil", amount: 20.67, date: new Date(2021, 4, 12) },
  {
    id: "e3",
    title: "CarInsurance",
    amount: 294.67,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expense, setExpense] = useState(ex_expense);

  const addExpenseHandler = (expense) => {
    console.log("in App.,js");
    console.log(expense);
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    }); // 이전 상태의 함수의 스냅샷을 활용하여 업데이트 하는것이 가장 안정적
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expense} />
    </div>
  );
};

export default App;
