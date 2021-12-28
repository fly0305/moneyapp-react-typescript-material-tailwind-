export interface IncomeGroupByQueryResponse {
  incomeGroupBy: IncomeGroupByQueryBody[];
}

export interface IncomeGroupByQueryBody {
  incomePaidBy?: string;
  incomePaymentMethod?: string;
  incomeType?: string;
  sum?: number;
  count?: number;
  currency?: string;
  date?: string;
  __typename?: string;
}

export interface IncomeSumQueryResponse {
  incomeSum: IncomeExpensesSumQueryBody[];
}

export interface ExpensesSumQueryResponse {
  expenseSum: IncomeExpensesSumQueryBody[];
}

export interface IncomeExpensesSumQueryBody {
  __typename?: string;
  sum: number;
}

export interface AverageIncomeQueryResponse {
  averageIncome: IncomeExpensesAverageQueryBody[];
}

export interface IncomeExpensesAverageQueryBody {
  __typename?: string;
  average?: number;
}
