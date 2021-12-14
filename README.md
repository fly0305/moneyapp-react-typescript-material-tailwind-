# MoneyApp Frontend

## 🛠️ Technologies used
| Purpose | Tool |
| :--- | :---- |
| Language | TypeScript |
| Authentication | Auth0 SDK |
| Routing | React-Router |
| State management | Apollo client |
| Developer experience (Linting) | Eslint + Prettier |
| Styling - structure | Material-UI |
| Styling - details | TailwindCSS |
| Charts | [Apex charts](https://apexcharts.com/docs/react-charts/) & [Chart.js](https://react-chartjs-2.netlify.app/examples) & [Recharts](https://recharts.org/en-US/examples) |

##  ✍️ How charts getting updated - Architecture approach
1. `Dashboard` passes down date-range (`startDate` and `endDate`) to specified chart components as props
2. Charts receive date-range as props from Dashboard
3. Each chart populates date range into `gql` query
4. The new `gql` query will be used to call data from API using `useQuery` from `Apollo`
5. The returned query response will be extracted and modified to fit chart type within each chart component

## ✨ Features
### General
- Global date-range picker that updates agregated data for all charts (exl, time-series)

### Dynamic charts
| Chart type | Description |
| :--- | :---- |
| Time-series composed bar chart | For monthly income vs expenses (starts Jan 2021)|
| Time-series composed area chart   | For daily income vs expenses (starts 2021/01/01) |
| Time-series composed line chart  | for weekly income vs expenses (starts 2021/01/01) |
| Flat line | For all time-series chart showing calculated monthly+daily+weekly average income & expenses|
| Scattered chart | For instances of income & expense over time (count) |
| Radar chart | For income by income type |
| Pie chart | For income by payment method |
| Pie chart | For income by "paid by" |
| Pie chart | For income by currency |
| Vertical bar chart | For expenses by type (sortable) |
| Doughnut chart | For expenses by sub-type |
| Horizontal bar chart | For expenses by payment type |

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
