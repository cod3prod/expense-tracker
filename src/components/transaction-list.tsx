"use client";

import { Expense } from "@/types/expense";
import TransactionItem from "./transaction-item";

export default function TransactionList({
 history,
 deleteExpense
}: {
  history: Expense[];
  deleteExpense: (id: number) => void;
}) {
  return (
    <section id="mb-5">
      <h2>Transaction History</h2>
      <ul>{history.map(expense => <TransactionItem key={expense.id} {...expense} deleteExpense={deleteExpense} />)}</ul>
    </section>
  );
}
