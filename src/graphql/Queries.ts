import { gql } from '@apollo/client';

export const INCOME_BY_PAYMENT_METHOD = gql`
  query INCOME_BY_PAYMENT_METHOD($startDate: DateTime, $endDate: DateTime) {
    incomeGroupBy(
      field: "paymentMethod"
      valueType: "sum"
      startDate: $startDate
      endDate: $endDate
    ) {
      incomePaymentMethod
      sum
    }
  }
`;

export const INCOME_BY_PAIDBY = gql`
  query INCOME_BY_PAIDBY($startDate: DateTime, $endDate: DateTime) {
    incomeGroupBy(
      field: "paidBy"
      valueType: "sum"
      startDate: $startDate
      endDate: $endDate
    ) {
      incomePaidBy
      sum
    }
  }
`;

export const INCOME_BY_TYPE = gql`
  query INCOME_BY_TYPE($startDate: DateTime, $endDate: DateTime) {
    incomeGroupBy(
      field: "incomeType"
      valueType: "sum"
      startDate: $startDate
      endDate: $endDate
    ) {
      incomeType
      sum
    }
  }
`;

export const INCOME_BY_DATE = gql`
  query INCOME_BY_DATE($startDate: DateTime, $endDate: DateTime) {
    incomeGroupBy(
      field: "date"
      valueType: "sum"
      startDate: $startDate
      endDate: $endDate
    ) {
      date
      sum
    }
  }
`;

export const INCOME_SUM = gql`
  query INCOME_SUM($startDate: DateTime, $endDate: DateTime) {
    incomeSum(startDate: $startDate, endDate: $endDate) {
      sum
    }
  }
`;

export const EXPENSE_SUM = gql`
  query EXPENSE_SUM($startDate: DateTime, $endDate: DateTime) {
    expenseSum(startDate: $startDate, endDate: $endDate) {
      sum
    }
  }
`;

export const AVERAGE_DAILY_INCOME = gql`
  query AVERAGE_DAILY_INCOME($startDate: DateTime!, $endDate: DateTime!) {
    averageIncome(type: "daily", startDate: $startDate, endDate: $endDate) {
      type
      average
    }
  }
`;

export const NET_INCOME = gql`
  query NET_INCOME($startDate: DateTime, $endDate: DateTime) {
    netIncome(startDate: $startDate, endDate: $endDate) {
      sum
    }
  }
`;

export const AVERAGE_DAILY_EXPENSES = gql`
  query AVERAGE_DAILY_EXPENSES($startDate: DateTime!, $endDate: DateTime!) {
    averageExpenses(startDate: $startDate, endDate: $endDate) {
      average
    }
  }
`;

export const EXPENSES_BY_TYPE = gql`
  query EXPENSES_BY_TYPE($startDate: DateTime, $endDate: DateTime) {
    expensesGroupBy(
      field: "type"
      valueType: "sum"
      startDate: $startDate
      endDate: $endDate
    ) {
      expenseType
      sum
    }
  }
`;

export const EXPENSES_BY_DATE = gql`
  query EXPENSES_BY_DATE($startDate: DateTime, $endDate: DateTime) {
    expensesGroupBy(
      field: "date"
      valueType: "sum"
      startDate: $startDate
      endDate: $endDate
    ) {
      date
      sum
    }
  }
`;

export const EXPENSES_BY_PAYMENT_TYPE = gql`
  query EXPENSES_BY_PAYMENT_TYPE($startDate: DateTime, $endDate: DateTime) {
    expensesGroupBy(
      field: "paymentType"
      valueType: "sum"
      startDate: $startDate
      endDate: $endDate
    ) {
      expensePaymentType
      sum
    }
  }
`;

export const EXPENSES_BY_SUB_TYPE = gql`
  query EXPENSES_BY_SUB_TYPE($startDate: DateTime, $endDate: DateTime) {
    expensesGroupBy(
      field: "subType"
      valueType: "sum"
      startDate: $startDate
      endDate: $endDate
    ) {
      expenseSubType
      sum
    }
  }
`;

export const EXPENSES_BY_CURRENCY = gql`
  query EXPENSES_BY_CURRENCY($startDate: DateTime, $endDate: DateTime) {
    expensesGroupBy(
      field: "currency"
      valueType: "sum"
      startDate: $startDate
      endDate: $endDate
    ) {
      currency
      sum
    }
  }
`;
