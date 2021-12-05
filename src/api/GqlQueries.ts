import { gql } from '@apollo/client';

export const GET_INCOME_BY_TYPE = gql`
  query Income (filter: "type", value: "sum") {
    category
    sum
  }
`;
