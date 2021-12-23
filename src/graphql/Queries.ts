import { gql } from '@apollo/client';

export const INCOME_BY_PAYMENT_METHOD = gql`
  query INCOME_BY_PAYMENT_METHOD($startDate: DateTime, $endDate: DateTime) {
    incomeGroupBy(
      field: "paymentMethod"
      valueType: "sum"
      dateStartInc: $startDate
      dateEndInc: $endDate
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
      dateStartInc: $startDate
      dateEndInc: $endDate
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
      dateStartInc: $startDate
      dateEndInc: $endDate
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
      dateStartInc: $startDate
      dateEndInc: $endDate
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
