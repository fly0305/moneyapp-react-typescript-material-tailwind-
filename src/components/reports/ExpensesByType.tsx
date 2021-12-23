import { ChartContainer } from 'components/ChartContainer';
import { BarChart } from 'components/charts/BarChart';

const ExpensesByType: React.FC = () => {
  return (
    <>
      <ChartContainer title={'Expenses by type'} component={<BarChart />} />
    </>
  );
};

export default ExpensesByType;
