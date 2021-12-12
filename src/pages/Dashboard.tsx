import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Container, Grid } from '@mui/material';
import * as dotenv from 'dotenv';
import TopBar from 'components/TopBar';
import BasicDateRangePicker from 'components/DaterangePicker';
import ScatteredChart from 'components/charts/ScatteredChart';
import { ChartContainer } from 'components/ChartContainer';
import { BarChart } from 'components/charts/BarChart';
import { RadarChart } from 'components/charts/RadarChart';
import PieChart from 'components/charts/PieChart';
import DoughnutChart from 'components/charts/DoughnutChart';
import { LineChart } from 'components/charts/LineChart';
import { ComposedChart } from 'components/charts/ComposedChart';
import { StackedBarChart } from 'components/charts/StackedBarChart';
import { useQuery } from '@apollo/client';
import { INCOME_BY_PAYMENT_METHOD } from '../graphql/Queries';
import Loading from './Loading';
dotenv.config({ path: __dirname + '/.env' });

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
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

  const { data, loading, error } = useQuery(INCOME_BY_PAYMENT_METHOD);

  useEffect(() => {
    if (data) console.log(`data: ${data}`);
    else if (loading) console.log(`Loading: ${loading}`);
    else if (error) console.log(error);
  }, [data, loading, error]);

  if (loading) return <Loading />;

  return (
    <>
      <TopBar />
      <Container maxWidth="xl">
        <h2>Welcome back, {user?.name}</h2>
        <Button onClick={copyToken}>Copy Token</Button>
        <BasicDateRangePicker />
        <Grid container spacing={4}>
          <Grid item lg={6} sm={6} xs={12}>
            <ChartContainer
              title={'Income vs Expenses'}
              component={<ScatteredChart />}
            />
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <ChartContainer
              title={'Expenses by type'}
              component={<LineChart />}
            />
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <ChartContainer
              title={'Income by payee'}
              component={<BarChart />}
            />
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <ChartContainer
              title={'Nunber of times earned & spent money'}
              component={<ScatteredChart />}
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
            <ChartContainer
              title={'Expenses by sub-type'}
              component={<RadarChart />}
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
            <ChartContainer
              title={'Income by payment method'}
              component={<DoughnutChart />}
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
            <ChartContainer
              title={'Income by currency'}
              component={<PieChart />}
            />
          </Grid>
          <Grid item lg={6} sm={12} xs={12}>
            <ChartContainer
              title={'Monthly income & expense & average income'}
              component={<ComposedChart />}
            />
          </Grid>
          <Grid item lg={6} sm={12} xs={12}>
            <ChartContainer
              title={'Monthly expenses by type'}
              component={<StackedBarChart />}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
