import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expense = [
    { title: "Toilet Paper", amount: 10, date: new Date(2021, 3, 12) },
    { title: "Pencil", amount: 20.67, date: new Date(2021, 4, 12) },
    { title: "CarInsurance", amount: 294.67, date: new Date(2021, 5, 12) },
  ];
  return (
    <div>
      <h2>gogogo</h2>
      <Expenses items={expense} />
    </div>
  );
};

export default App;
