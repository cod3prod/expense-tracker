"use client";

import { Expense } from "@/types/expense";

export default function Balance({history}:{ history: Expense[]}) {
  const totalBalance = history.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <section className="bg-[#fff] text-center p-5 rounded-md shadow-md">
      <h2 className="mb-2">Total Balance</h2>
      <p className="text-2xl font-bold">{totalBalance.toLocaleString()}원</p>
    </section>
  );
}
