import { useQuery } from '@apollo/client';
import PaidIcon from '@mui/icons-material/Paid';
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { startDateVar, endDateVar } from 'graphql/Cache';
import { EXPENSE_SUM } from 'graphql/Queries';
import { ExpensesSumQueryResponse } from 'graphql/Queries.dto';

const TotalExpenses = (props: any) => {
  const s = new Date(startDateVar());
  const e = new Date(endDateVar());

  const startDate = s;
  const endDate = e;
  const { data } = useQuery<ExpensesSumQueryResponse>(EXPENSE_SUM, {
    variables: { startDate, endDate },
  });
  const amount = data?.expenseSum[0].sum;
  return (
    <Card sx={{ height: '100%' }} style={{ boxShadow: '4' }}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Total Expenses
            </Typography>
            <Typography color="textPrimary" variant="h5">
              $ {amount ? amount.toFixed(2) : 'Undefined'} NZD
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: red[600],
                height: 56,
                width: 56,
              }}
            >
              <PaidIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default TotalExpenses;
