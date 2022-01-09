import { useQuery, useReactiveVar } from '@apollo/client';
import PaidIcon from '@mui/icons-material/Paid';
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { NetIncomeQueryResponse } from 'dto/Queries.dto';
import { endDateVar, startDateVar } from 'graphql/Cache';
import { NET_INCOME } from 'graphql/Queries';
import { isPositive } from 'util/isPositive';

const NetIncome = () => {
  const s = useReactiveVar(startDateVar);
  const e = useReactiveVar(endDateVar);

  const startDate = s;
  const endDate = e;
  const { data } = useQuery<NetIncomeQueryResponse>(NET_INCOME, {
    variables: { startDate, endDate },
  });
  const amount = data?.netIncome[0].sum;
  return (
    <Card sx={{ height: '100%' }} variant="outlined">
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Net Income
            </Typography>
            <Typography
              color={isPositive(amount) ? 'green' : 'red'}
              variant="h5"
            >
              {isPositive(amount) ? '+ $ ' : '- $ '}
              {amount
                ? amount?.toString().slice(1, amount.toString().length)
                : 'Loading'}{' '}
              NZD
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
              <PaidIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default NetIncome;
