import { gql } from '@apollo/client';

export const INCOME_BY_PAYMENT_METHOD = gql`
  query INCOME_BY_PAYMENT_METHOD {
    incomeGroupBy(
      field: "paymentMethod"
      valueType: "sum"
      dateStartInc: "Fri Jan 01 2021 13:00:00 GMT+1300 (New Zealand Daylight Time)"
      dateEndInc: "Sun Nov 21 2021 13:00:00 GMT+1300 (New Zealand Daylight Time)"
    ) {
      incomePaymentMethod
      sum
    }
  }
`;

export const INCOME_BY_PAIDBY = gql`
  query INCOME_BY_PAIDBY {
    incomeGroupBy(
      field: "paidBy"
      valueType: "sum"
      dateStartInc: "Fri Jan 01 2021 13:00:00 GMT+1300 (New Zealand Daylight Time)"
      dateEndInc: "Sun Nov 21 2021 13:00:00 GMT+1300 (New Zealand Daylight Time)"
    ) {
      incomePaidBy
      sum
    }
  }
`;

export const INCOME_BY_TYPE = gql`
  query INCOME_BY_TYPE {
    incomeGroupBy(
      field: "incomeType"
      valueType: "sum"
      dateStartInc: "Fri Jan 01 2021 13:00:00 GMT+1300 (New Zealand Daylight Time)"
      dateEndInc: "Sun Nov 21 2021 13:00:00 GMT+1300 (New Zealand Daylight Time)"
    ) {
      incomeType
      sum
    }
  }
`;
