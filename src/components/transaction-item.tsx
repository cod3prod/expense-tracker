"use client";

import { Expense } from "@/types/expense";
import { twMerge } from "tailwind-merge";

export default function TransactionItem({
  id,
  name,
  amount,
  deleteExpense,
}: Expense & {
  deleteExpense: (id: number) => void;
}) {
  return (
    <li
      className={twMerge(
        "flex justify-between items-center bg-[#fff] mb-[10px] px-[15px] py-[10px] rounded-md shadow-md",
        amount > 0 ? "text-[#2ecc71]" : "text-[#e74c3c]"
      )}
    >
      <span>{name}</span>
      <span>{amount.toLocaleString()} 원</span>
      <button
        className="bg-[#e74c3c] text-[#fff] px-2 py-1 rounded-md cursor-pointer transition-all duration-300 hover:bg-[#c0392b]"
        onClick={() => deleteExpense(id)}
      >
        삭제
      </button>
    </li>
  );
}
