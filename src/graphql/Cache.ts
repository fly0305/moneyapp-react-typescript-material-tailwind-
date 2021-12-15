import { makeVar, InMemoryCache } from '@apollo/client';

export const startDateVar = makeVar(new Date('2021-01-01'));
export const endDateVar = makeVar(new Date());

export const Cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        startDate: {
          read() {
            return startDateVar();
          },
        },
        endDate: {
          read() {
            return endDateVar();
          },
        },
      },
    },
  },
});
