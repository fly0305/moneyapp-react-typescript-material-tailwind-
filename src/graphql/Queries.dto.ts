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
