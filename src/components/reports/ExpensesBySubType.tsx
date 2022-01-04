import { useQuery, useReactiveVar } from '@apollo/client';
import { ChartContainer } from 'components/ChartContainer';
import DoughnutChart from 'components/charts/DoughnutChart';
import { startDateVar, endDateVar } from 'graphql/Cache';
import { EXPENSES_BY_SUB_TYPE } from 'graphql/Queries';
import { ExpensesGroupByQueryResponse } from 'graphql/Queries.dto';

const ExpensesBySubType: React.FC = () => {
  const s = useReactiveVar(startDateVar);
  const e = useReactiveVar(endDateVar);

  const startDate = s;
  const endDate = e;

  const { data, loading } = useQuery<ExpensesGroupByQueryResponse>(
    EXPENSES_BY_SUB_TYPE,
    {
      variables: { startDate, endDate },
    },
  );

  const d = data?.expensesGroupBy;
  // console.log(d);
  const labels = d?.map((item) => item.expenseSubType);
  const values = d?.map((item) => item.sum);
  return (
    <>
      <ChartContainer
        title={'Expenses by sub-type'}
        component={
          <DoughnutChart labels={labels} values={values} loading={loading} />
        }
      />
    </>
  );
};

export default ExpensesBySubType;
