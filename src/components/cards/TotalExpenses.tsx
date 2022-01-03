import { useQuery, useReactiveVar } from '@apollo/client';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { startDateVar, endDateVar } from 'graphql/Cache';
import { EXPENSE_SUM } from 'graphql/Queries';
import { ExpensesSumQueryResponse } from 'graphql/Queries.dto';

const TotalExpenses = () => {
  const s = useReactiveVar(startDateVar);
  const e = useReactiveVar(endDateVar);

  const startDate = s;
  const endDate = e;
  const { data } = useQuery<ExpensesSumQueryResponse>(EXPENSE_SUM, {
    variables: { startDate, endDate },
  });
  const amount = data?.expenseSum[0].sum;
  return (
    <Card sx={{ height: '100%' }} variant="outlined">
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Total Expenses
            </Typography>
            <Typography color="red" variant="h5">
              - $ {amount ? amount.toFixed(2) : 'Undefined'} NZD
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
              <ShoppingCartIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default TotalExpenses;
