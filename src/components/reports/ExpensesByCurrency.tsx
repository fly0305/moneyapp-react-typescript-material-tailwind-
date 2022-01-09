import { useQuery, useReactiveVar } from '@apollo/client';
import { ChartContainer } from 'components/ChartContainer';
import DoughnutChart from 'components/charts/DoughnutChart';
import { ExpensesGroupByQueryResponse } from 'dto/Queries.dto';
import { startDateVar, endDateVar } from 'graphql/Cache';
import { EXPENSES_BY_CURRENCY } from 'graphql/Queries';

const ExpensesByCurrency: React.FC = () => {
  const s = useReactiveVar(startDateVar);
  const e = useReactiveVar(endDateVar);

  const startDate = s;
  const endDate = e;

  const { data, loading } = useQuery<ExpensesGroupByQueryResponse>(
    EXPENSES_BY_CURRENCY,
    {
      variables: { startDate, endDate },
    },
  );

  const d = data?.expensesGroupBy;
  // console.log(d);
  const labels = d?.map((item) => item.currency);
  const values = d?.map((item) => item.sum);
  return (
    <>
      <ChartContainer
        title={'Expenses by currency'}
        component={
          <DoughnutChart labels={labels} values={values} loading={loading} />
        }
      />
    </>
  );
};

export default ExpensesByCurrency;
