import { useQuery, useReactiveVar } from '@apollo/client';
import { ChartContainer } from 'components/ChartContainer';
import DoughnutChart from 'components/charts/DoughnutChart';
import { IncomeGroupByQueryResponse } from 'dto/Queries.dto';
import { startDateVar, endDateVar } from 'graphql/Cache';
import { INCOME_BY_TYPE } from 'graphql/Queries';

const IncomeByType: React.FC = () => {
  const s = useReactiveVar(startDateVar);
  const e = useReactiveVar(endDateVar);

  const startDate = s;
  const endDate = e;

  const { data, loading } = useQuery<IncomeGroupByQueryResponse>(
    INCOME_BY_TYPE,
    {
      variables: { startDate, endDate },
    },
  );

  const d = data?.incomeGroupBy;
  const labels = d?.map((item) => item.incomeType);
  const values = d?.map((item) => item.sum);
  return (
    <>
      <ChartContainer
        title={'Income by type'}
        component={
          <DoughnutChart labels={labels} values={values} loading={loading} />
        }
      />
    </>
  );
};

export default IncomeByType;
