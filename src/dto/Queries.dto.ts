// INCOME_BY_BLAHBLAH
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

// EXPENSES_BY_BLAHBLAH
export interface ExpensesGroupByQueryResponse {
  expensesGroupBy: ExpensesGroupByQueryBody[];
}

export interface ExpensesGroupByQueryBody {
  expenseType?: string;
  expenseSubType?: string;
  expensePaymentType?: string;
  sum?: number;
  count?: number;
  currency?: string;
  date?: string;
  __typename?: string;
}

// INCOME_SUM
export interface IncomeSumQueryResponse {
  incomeSum: IncomeExpensesSumQueryBody[];
}

// EXPENSE_SUM
export interface ExpensesSumQueryResponse {
  expenseSum: IncomeExpensesSumQueryBody[];
}

export interface IncomeExpensesSumQueryBody {
  __typename?: string;
  sum: number;
}

// AVERAGE_DAILY_INCOME
export interface AverageIncomeQueryResponse {
  averageIncome: IncomeExpensesAverageQueryBody[];
}

export interface AverageExpensesQueryResponse {
  averageExpenses: IncomeExpensesAverageQueryBody[];
}

export interface IncomeExpensesAverageQueryBody {
  __typename?: string;
  average?: number;
}

// NET_INCOME
export interface NetIncomeQueryResponse {
  netIncome: NetIncomeQueryBody[];
}

export interface NetIncomeQueryBody {
  __typename?: string;
  sum?: number;
}
