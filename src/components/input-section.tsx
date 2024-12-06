"use client";

import { Expense } from "@/types/expense";
import { FormEvent, useRef } from "react";

export default function InputSection({
  addExpense,
}: {
  addExpense: (expense: Expense) => void;
}) {
  const nameRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!nameRef.current || !amountRef.current) return;

    const name = nameRef.current.value;
    const amount = Number(amountRef.current.value);

    if (!name || !amount) return;

    const newExpense: Expense = {
      id: Date.now(),
      name,
      amount,
    };

    addExpense(newExpense);

    nameRef.current.value = "";
    amountRef.current.value = "";
    nameRef.current.focus();
  };

  return (
    <section className="bg-[#fff] p-5 rounded-md shadow-md mb-5">
      <h2 className="text-xl font-bold text-[#2c3e50] mb-4">거래 추가</h2>
      <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          className="flex-1 p-2 border border-[#ddd] rounded-md text-base w-full"
          type="text"
          id="transaction-name"
          placeholder="거래명"
          required
        />
        <input
          ref={amountRef}
          className="flex-1 p-2 border border-[#ddd] rounded-md text-base w-full"
          type="number"
          id="transaction-amount"
          placeholder="금액 (예: 10000 또는 -5000)"
          required
        />
        <button className="bg-[#3498db] hover:bg-[#2e80b9] text-[#fff] px-5 py-[10px] cursor-pointer transition-all duration-300 rounded-md w-full sm:w-auto">
          추가
        </button>
      </form>
    </section>
  );
}
