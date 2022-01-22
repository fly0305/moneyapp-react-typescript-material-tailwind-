import { gql } from '@apollo/client';

export const WATCH_INCOME = gql`
  subscription watchIncome {
    id
  }
`;
