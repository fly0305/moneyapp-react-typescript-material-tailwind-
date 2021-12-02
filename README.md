# MoneyApp Frontend

## 🛠️ Technologies used

- TypeScript!
- Authentication with Auth0 SDK
- Routing with React-Router
- Apollo client for interacting with GraphQL server
- State management with Redux toolkit
- Eslint + Prettier for  pre-commit linting
- Styling with Material-UI and TailwindCSS
- Data visualisation with [Apex charts](https://apexcharts.com/docs/react-charts/), [Chart.js](https://react-chartjs-2.netlify.app/examples) and Recharts

## ✨ Features
### General
- Global date-range picker that updates agregated data for all charts (exl, time-series)

### Dynamic charts
| Chart type | Description | Status |
| :--- | :---- | :--- |
| Time-series composed bar chart | For monthly income vs expenses (starts Jan 2021) | Not started|
| Time-series composed area chart   | For daily income vs expenses (starts 2021/01/01) ||
| Time-series composed line chart  | for weekly income vs expenses (starts 2021/01/01) ||
| Flat line | For all time-series chart showing calculated monthly+daily+weekly average income & expenses| |
| Scattered chart | For instances of income & expense over time (count) ||
| Radar chart | For income by income type ||
| Pie chart | For income by payment method ||
| Pie chart | For income by "paid by" ||
| Pie chart | For income by currency ||
| Vertical bar chart | For expenses by type (sortable) ||
| Doughnut chart | For expenses by sub-type ||
| Horizontal bar chart | For expenses by payment type ||

## ⚒️ API
- GraphQL API written in NestJS [here](https://github.com/Mingyang-Li/moneyapp-api)

## ✨ Infrastructure
- Netlify (CD\CI)

## Run the app
```bash
# build
yarn build

# test
yarn test

# running
yarn start
```
