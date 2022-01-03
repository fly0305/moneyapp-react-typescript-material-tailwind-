import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Container, Grid } from '@mui/material';
import * as dotenv from 'dotenv';
import TopBar from 'components/TopBar';
import BasicDateRangePicker from 'components/DaterangePicker';
import IncomePaidBy from 'components/reports/IncomePaidBy';
import IncomeByType from 'components/reports/IncomeByType';
import IncomeByPaymentMethod from 'components/reports/IncomeByPaymentMethod';
import TotalIncome from 'components/cards/TotalIncome';
import TotalExpenses from 'components/cards/TotalExpenses';
import NetIncome from 'components/cards/NetIncome';
import ExpensesByType from 'components/reports/ExpensesByType';
import AverageDailyIncome from 'components/cards/AverageDailyIncome';
import AverageDailyExpenses from 'components/cards/AverageDailyExpenses';
import IncomeExpensesGrowth from 'components/reports/IncomeExpensesGrowth';
import ExpensesByPaymentType from 'components/reports/ExpensesByPaymentType';
import ExpensesBySubType from 'components/reports/ExpensesBySubType';
import ExpensesByCurrency from 'components/reports/ExpensesByCurrency';
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

  return (
    <>
      <TopBar />
      <Container maxWidth="xl">
        <h2>
          Welcome back, {user?.name} - {user?.email}
        </h2>
        <Button onClick={copyToken}>Copy Token</Button>
        <BasicDateRangePicker />
        <br></br>
        <Grid container spacing={2}>
          <Grid item lg={4} sm={4} xs={12}>
            <TotalIncome />
          </Grid>
          <Grid item lg={4} sm={4} xs={12}>
            <TotalExpenses />
          </Grid>
          <Grid item lg={4} sm={4} xs={12}>
            <NetIncome />
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <AverageDailyIncome />
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <AverageDailyExpenses />
          </Grid>
          <Grid item lg={8} sm={12} xs={12}>
            <IncomeExpensesGrowth />
          </Grid>
          <Grid item lg={4} sm={4} xs={12}>
            <IncomePaidBy />
          </Grid>
          <Grid item lg={3} sm={4} xs={12}>
            <IncomeByPaymentMethod />
          </Grid>
          <Grid item lg={3} sm={4} xs={12}>
            <IncomeByType />
          </Grid>
          <Grid item lg={6} sm={12} xs={12}>
            <ExpensesByType />
          </Grid>
          <Grid item lg={6} sm={12} xs={12}>
            <ExpensesByPaymentType />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ExpensesBySubType />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ExpensesByCurrency />
          </Grid>
        </Grid>
      </Container>
      <br></br>
    </>
  );
};

export default Dashboard;
