# Expense Tracker

**사용자의 지출 내역을 기록하고 관리할 수 있는 간단한 애플리케이션**

## 🎯 **프로젝트 목적**

### **핵심 목표**

- **localStorage 사용**: 사용자가 입력한 지출 데이터를 `localStorage`에 저장해, 브라우저를 새로고침하거나 다시 방문해도 데이터를 유지할 수 있습니다.

## 🔨 **기술 스택**

- **주요 기술**: Next.js 15
- **스타일링**: Tailwind CSS

## 📝 **핵심 학습 내용**

### localStorage 사용

`localStorage`를 활용해 지출 내역 데이터를 저장하고 불러오는 기능을 구현했습니다.

```typescript
"use client";

import { Expense } from "@/types/expense";
import { useState, useEffect } from "react";

export default function useExpense() {
  const [history, setHistory] = useState<Expense[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedExpenses = localStorage.getItem("expenses");
      setHistory(savedExpenses ? JSON.parse(savedExpenses) : []);
    }
  }, []);

  const addExpense = (expense: Expense) => {
    const nextHistory = [...history, expense];
    setHistory(nextHistory);
    localStorage.setItem("expenses", JSON.stringify(nextHistory));
  };

  const deleteExpense = (id: number) => {
    const nextHistory = history.filter((expense) => expense.id !== id);
    setHistory(nextHistory);
    localStorage.setItem("expenses", JSON.stringify(nextHistory));
  };

  return { history, addExpense, deleteExpense };
}
```

## ⚙️ **프로젝트 설정**

```bash
# 패키지 설치
npm install

# 로컬 개발 환경 실행
npm run dev
```
