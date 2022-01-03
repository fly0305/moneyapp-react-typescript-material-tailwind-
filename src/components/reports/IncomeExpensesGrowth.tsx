import { useQuery, useReactiveVar } from '@apollo/client';
import { ChartContainer } from 'components/ChartContainer';
import AreaChart from 'components/charts/AreaChart';
import { startDateVar, endDateVar } from 'graphql/Cache';
import { EXPENSES_BY_DATE, INCOME_BY_DATE } from 'graphql/Queries';
import {
  ExpensesGroupByQueryResponse,
  IncomeGroupByQueryResponse,
} from 'graphql/Queries.dto';
import { cumulativeSum } from 'util/cumulativeSum';
import { DataSet } from '../charts/Chart.dto';

const IncomeExpensesGrowth: React.FC = () => {
  const s = useReactiveVar(startDateVar);
  const e = useReactiveVar(endDateVar);

  const startDate = s;
  const endDate = e;

  const incomeData = useQuery<IncomeGroupByQueryResponse>(INCOME_BY_DATE, {
    variables: { startDate, endDate },
  });

  const i = incomeData.data?.incomeGroupBy;
  const dates = i?.map((item) => item.date?.slice(0, 10));
  const incomeValues = i?.map((item) => item.sum);
  const accumulatedIncome = incomeValues?.map(cumulativeSum);

  const expensesData = useQuery<ExpensesGroupByQueryResponse>(
    EXPENSES_BY_DATE,
    {
      variables: { startDate, endDate },
    },
  );
  const exp = expensesData.data?.expensesGroupBy;
  const expensesValues = exp?.map((item) => item.sum);
  const accumulatedExpenses = expensesValues?.map(cumulativeSum);

  const dataset: DataSet[] = [
    {
      name: 'Income',
      data: accumulatedIncome,
    },
    {
      name: 'Expenses',
      data: accumulatedExpenses,
    },
  ];

  return (
    <>
      <ChartContainer
        title={'Income vs Expenses'}
        component={<AreaChart datasets={dataset} labels={dates} />}
      />
    </>
  );
};

export default IncomeExpensesGrowth;
