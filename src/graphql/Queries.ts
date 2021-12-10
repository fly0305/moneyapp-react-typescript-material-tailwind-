import { gql } from '@apollo/client';

export const INCOME_BY_PAYMENT_METHOD = gql`
  query {
    incomeGroupBy(
      field: "paymentMethod"
      valueType: "sum"
      dateStartInc: "Sat May 01 2021 12:00:00 GMT+1200 (New Zealand Standard Time)"
      dateEndInc: "Sun Nov 21 2021 13:00:00 GMT+1300 (New Zealand Daylight Time)"
    ) {
      incomePaymentMethod
      sum
    }
  }
`;
