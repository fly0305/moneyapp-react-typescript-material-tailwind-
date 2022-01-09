import { useQuery, useReactiveVar } from '@apollo/client';
import { ChartContainer } from 'components/ChartContainer';
import BarChart from 'components/charts/BarChart';
import { ExpensesGroupByQueryResponse } from 'dto/Queries.dto';
import { startDateVar, endDateVar } from 'graphql/Cache';
import { EXPENSES_BY_TYPE } from 'graphql/Queries';

const ExpensesByType: React.FC = () => {
  const s = useReactiveVar(startDateVar);
  const e = useReactiveVar(endDateVar);

  const startDate = s;
  const endDate = e;

  const { data, loading } = useQuery<ExpensesGroupByQueryResponse>(
    EXPENSES_BY_TYPE,
    {
      variables: { startDate, endDate },
    },
  );

  const d = data?.expensesGroupBy;
  // console.log(d);
  const labels = d?.map((item) => item.expenseType);
  const values = d?.map((item) => item.sum);
  return (
    <>
      <ChartContainer
        title={'Expenses by type'}
        component={
          <BarChart
            labels={labels}
            values={values}
            type="horizontal"
            loading={loading}
          />
        }
      />
    </>
  );
};

export default ExpensesByType;
