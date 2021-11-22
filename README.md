# MoneyApp Frontend

## 🛠️ Technologies used

- TypeScript!
- Authentication with Auth0 SDK
- Routing with React-Router
- Apollo client for interacting with GraphQL server
- State management with Redux toolkit
- Eslint + Prettier for  pre-commit linting
- Styling with Material-UI and TailwindCSS
- Data visualisation with Apex charts, Chart.js and Recharts

## ✨ Features
- Global date-range picker that updates agregated data for all charts (exl, time-series)
- Time-series composed bar chart for monthly income vs expenses (starts Jan 2021)
- Time-series composed area chart for daily income vs expenses (starts 2021/01/01)
- Flat lines of calculated monthly average income & expenses on all time-series chart
- Scattered chart for instances of income & expense over time
- Pie chart for income by payment method
- Radar chart for income by income type
- Pie chart for income by "paid by"
- Pie chart for income by currency
- Vertical bar chart for expenses by type (sortable)
- Doughnut chart for expenses by sub-type
- Doughtnut chart for expenses by payment type


## ⚒️ API
- NestJS based GraphQL API [here](https://github.com/Mingyang-Li/moneyapp-api)

## ✨ Deployment
- Netlify

## Run the app
```bash
# build
yarn build

# test
yarn test

# running
yarn start
```
