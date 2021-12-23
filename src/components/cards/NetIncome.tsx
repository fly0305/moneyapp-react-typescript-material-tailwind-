import PaidIcon from '@mui/icons-material/Paid';
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

const NetIncome = () => {
  return (
    <Card sx={{ height: '100%' }} style={{ boxShadow: '4' }}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Net Income
            </Typography>
            <Typography color="textPrimary" variant="h5">
              + $ 748.29 NZD
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
