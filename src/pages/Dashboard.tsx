import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Container, Grid } from '@mui/material';
import * as dotenv from 'dotenv';
import TopBar from 'components/TopBar';
import BasicDateRangePicker from 'components/DaterangePicker';
import { ChartContainer } from 'components/ChartContainer';
import PieChart from 'components/charts/PieChart';
// import { BarChart } from 'components/charts/BarChart';
// import { ScatteredChart } from 'components/charts/ScatteredChart';
// import { RadarChart } from 'components/charts/RadarChart';
// import DoughnutChart from 'components/charts/DoughnutChart';
// import { LineChart } from 'components/charts/LineChart';
// import { ComposedChart } from 'components/charts/ComposedChart';
// import { StackedBarChart } from 'components/charts/StackedBarChart';
import { useQuery } from '@apollo/client';
import { INCOME_BY_PAIDBY } from '../graphql/Queries';
import { IncomeGroupByQueryResponse } from 'graphql/Queries.dto';
dotenv.config({ path: __dirname + '/.env' });

const Dashboard: React.FC = () => {
  let token = '';
  const { user, getAccessTokenSilently } = useAuth0();
  const getToken = async () => {
    const a = await getAccessTokenSilently();
    token = a;
  };
  getToken();

  const copyToken = async () => {
    navigator.clipboard.writeText(`${token}`);
  };

  const { data, loading, error } =
    useQuery<IncomeGroupByQueryResponse>(INCOME_BY_PAIDBY);

  useEffect(() => {
    if (data) console.log(`data fetched!`);
    else if (loading) console.log(`Loading: ${loading}`);
    else if (error) console.log(error);
  }, [data, loading, error]);

  const d = data?.incomeGroupBy;
  const labels = d?.map((item) => item.incomePaidBy);
  const values = d?.map((item) => item.sum);

  return (
    <>
      <TopBar />
      <Container maxWidth="xl">
        <h2>
          Welcome back, {user?.name} - {user?.email}
        </h2>
        <Button onClick={copyToken}>Copy Token</Button>
        <BasicDateRangePicker />
        <Grid container spacing={4}>
          <Grid item lg={6} sm={6} xs={12}>
            <ChartContainer
              title={'Income paid by'}
              component={<PieChart labels={labels} values={values} />}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
