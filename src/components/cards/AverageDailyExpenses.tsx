import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { useQuery, useReactiveVar } from '@apollo/client';
import { startDateVar, endDateVar } from 'graphql/Cache';
import { AVERAGE_DAILY_EXPENSES } from 'graphql/Queries';
import { AverageExpensesQueryResponse } from 'graphql/Queries.dto';
import { isPositive } from 'util/isPositive';

const AverageDailyExpenses = () => {
  const s = useReactiveVar(startDateVar);
  const e = useReactiveVar(endDateVar);

  const startDate = s;
  const endDate = e;
  const { data, loading } = useQuery<AverageExpensesQueryResponse>(
    AVERAGE_DAILY_EXPENSES,
    {
      variables: { startDate, endDate },
    },
  );
  const amount = data?.averageExpenses[0].average;
  return (
    <Card sx={{ height: '100%' }} variant="outlined">
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Average Daily Expenses
            </Typography>
            <Typography
              color={isPositive(amount) ? 'green' : 'red'}
              variant="h5"
            >
              {isPositive(amount) ? '+ $ ' : '- $ '}
              {loading
                ? 'Loading...'
                : amount?.toString().slice(1, amount.toString().length)}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: blue[600],
                height: 56,
                width: 56,
              }}
            >
              <ArrowCircleDownIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default AverageDailyExpenses;
