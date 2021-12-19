import { useQuery } from '@apollo/client';

import { ChartContainer } from 'components/ChartContainer';
import PieChart from 'components/charts/PieChart';
import { INCOME_BY_PAIDBY } from 'graphql/Queries';
import { IncomeGroupByQueryResponse } from 'graphql/Queries.dto';

const IncomePaidBy: React.FC = () => {
  const s = new Date('2021-02-01');
  const startDate = s;
  const endDate = Date();
  console.log(startDate);

  const { data, loading } = useQuery<IncomeGroupByQueryResponse>(
    INCOME_BY_PAIDBY,
    {
      variables: { startDate, endDate },
    },
  );

  const d = data?.incomeGroupBy;
  const labels = d?.map((item) => item.incomePaidBy);
  const values = d?.map((item) => item.sum);
  return (
    <>
      <ChartContainer
        title={'Income paid by'}
        component={
          <PieChart labels={labels} values={values} loading={loading} />
        }
      />
    </>
  );
};

export default IncomePaidBy;
