import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
// import { useQuery } from '@apollo/client';
// import { startDateVar, endDateVar } from 'graphql/Cache';
// import { AVERAGE_DAILY_INCOME } from 'graphql/Queries';
// import { AverageIncomeQueryResponse } from 'graphql/Queries.dto';

const AverageDailyExpenses = () => {
  //   const s = new Date(startDateVar());
  //   const e = new Date(endDateVar());

  //   const startDate = s;
  //   const endDate = e;
  //   const { data, loading } = useQuery<AverageIncomeQueryResponse>(
  //     AVERAGE_DAILY_INCOME,
  //     {
  //       variables: { dateStartInc: startDate, dateEndInc: endDate },
  //     },
  //   );
  //   const amount = data?.averageIncome[0].average;
  return (
    <Card sx={{ height: '100%' }} variant="outlined">
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Average Daily Expenses
            </Typography>
            <Typography color="textPrimary" variant="h5">
              - $ 30 NZD
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
