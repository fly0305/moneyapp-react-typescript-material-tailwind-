import { useQuery } from '@apollo/client';
import { ChartContainer } from 'components/ChartContainer';
import LineChart from 'components/charts/LineChart';
import { startDateVar, endDateVar } from 'graphql/Cache';
import { INCOME_BY_DATE } from 'graphql/Queries';
import { IncomeGroupByQueryResponse } from 'graphql/Queries.dto';

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
  return (
    <>
      <ChartContainer
        title={'Daily Income'}
        component={
          <LineChart labels={labels} values={values} loading={loading} />
        }
      />
    </>
  );
};

export default IncomeByDate;
