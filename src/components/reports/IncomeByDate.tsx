import { useQuery } from '@apollo/client';
import { ChartContainer } from 'components/ChartContainer';
import LineChart from 'components/charts/LineChart';
import { startDateVar, endDateVar } from 'graphql/Cache';
import { INCOME_BY_DATE } from 'graphql/Queries';
import { IncomeGroupByQueryResponse } from 'graphql/Queries.dto';
import { cumulativeSum } from 'util/cumulativeSum';

const IncomeByDate: React.FC = () => {
  const s = new Date(startDateVar());
  const e = new Date(endDateVar());

  const startDate = s;
  const endDate = e;

  const { data, loading } = useQuery<IncomeGroupByQueryResponse>(
    INCOME_BY_DATE,
    {
      variables: { startDate, endDate },
    },
  );

  const d = data?.incomeGroupBy;
  const labels = d?.map((item) => item.date?.slice(0, 10));
  const values = d?.map((item) => item.sum);
  const accumulatedValues = values?.map(cumulativeSum);
  return (
    <>
      <ChartContainer
        title={'Income growth'}
        component={
          <LineChart
            labels={labels}
            values={accumulatedValues}
            loading={loading}
          />
        }
      />
    </>
  );
};

export default IncomeByDate;
