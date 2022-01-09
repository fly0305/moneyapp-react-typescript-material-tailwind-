import { useQuery, useReactiveVar } from '@apollo/client';
import { ChartContainer } from 'components/ChartContainer';
import DoughnutChart from 'components/charts/DoughnutChart';
import { IncomeGroupByQueryResponse } from 'dto/Queries.dto';
import { startDateVar, endDateVar } from 'graphql/Cache';
import { INCOME_BY_PAYMENT_METHOD } from 'graphql/Queries';

const IncomeByPaymentMethod: React.FC = () => {
  const s = useReactiveVar(startDateVar);
  const e = useReactiveVar(endDateVar);

  const startDate = s;
  const endDate = e;

  const { data, loading } = useQuery<IncomeGroupByQueryResponse>(
    INCOME_BY_PAYMENT_METHOD,
    {
      variables: { startDate, endDate },
    },
  );

  const d = data?.incomeGroupBy;
  const labels = d?.map((item) => item.incomePaymentMethod);
  const values = d?.map((item) => item.sum);
  return (
    <>
      <ChartContainer
        title={'Income by payment method'}
        component={
          <DoughnutChart labels={labels} values={values} loading={loading} />
        }
      />
    </>
  );
};

export default IncomeByPaymentMethod;
