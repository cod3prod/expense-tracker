"use client";

import { Expense } from "@/types/expense";
import { useState, useEffect } from "react";

export default function useExpense() {
    const [history, setHistory] = useState<Expense[]>([]);

    useEffect(()=>{
        if (typeof window !== 'undefined') {
            const savedExpenses = localStorage.getItem('expenses');
            setHistory(savedExpenses ? JSON.parse(savedExpenses) : []);
        }
    }, [])


    const addExpense = (expense: Expense) => {
        const nextHistory = [...history, expense];
        setHistory(nextHistory);
        localStorage.setItem('expenses', JSON.stringify(nextHistory));
    }

    const deleteExpense = (id: number) => {
        const nextHistory = history.filter((expense) => expense.id !== id);
        setHistory(nextHistory);
        localStorage.setItem('expenses', JSON.stringify(nextHistory));
    }

    return { history, addExpense, deleteExpense };
}