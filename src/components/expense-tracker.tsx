"use client";

import Balance from "./balance";
import useExpense from "./hooks/use-expense";
import InputSection from "./input-section";
import TransactionList from "./transaction-list";

export default function ExpenseTracker() {
  const { history, addExpense, deleteExpense } = useExpense();

  return (
    <>
      <InputSection addExpense={addExpense} />
      <TransactionList history={history} deleteExpense={deleteExpense} />
      <Balance history={history} />
    </>
  );
}
