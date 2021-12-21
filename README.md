# MoneyApp Frontend

## ⚒️ API
GraphQL API written in NestJS [here](https://github.com/Mingyang-Li/moneyapp-api)

## 🛠️ Technologies used
| Purpose | Tools |
| :--- | :---- |
| ✅ Language | TypeScript |
| ✅ Authentication | Auth0 SDK |
| ✅ Routing | React-Router |
| ✅ State management | Apollo client |
| ✅ Developer experience (Linting) | Eslint + Prettier |
| ✅ Styling - structure | Material-UI |
| ✅ Styling - details | TailwindCSS |
| ✅ Charts | [Apex charts](https://apexcharts.com/docs/react-charts/) & [Chart.js](https://react-chartjs-2.netlify.app/examples) & [Recharts](https://recharts.org/en-US/examples) |

##  ✍️ How are charts getting updated - Architectural approach
| No. | Steps
| :--- | :--- |
| 1 | `GlobalDatePicker` from `Dashboard` updates the `Reactive variables` date-range (aka `startDate` and `endDate`)  stored in `Apollo client` |
| 2 | Custom chart wrapper (e.g, `IncomeByPaymentMethod` which uses `LineChart.tsx`) takes date-range (`reactive variables`) from apollo client and populate them into their own `gql` queries as arguments
| 3 | Custom chart wrappers pass down fetched & processed data (`labels` and `values`) into `pure chart components`
| 4 | Each pure chart components populate data (no manual calculation involved)
| 5 | All chart wrapper that use `reactive variables` will update queries (so will charts update) whenever date-range changes in `Apollo client` store

## ✨ Features
### General
- Global date-range picker that updates agregated data for all charts (exl, time-series)

### Dynamic charts
| Chart type | Description | Status |
| :--- | :---- | :---- |
| Pie chart | For income by payment method | ✅ |
| Doughnut chart | For income by income type | ✅ |
| Doughnut chart | For income by "paid by" | ✅ |
| Line chart | For daily income | ⌛ |
| Time-series composed area chart   | For daily income vs expenses (starts 2021/01/01) |
| Time-series composed bar chart | For monthly income vs expenses (starts Jan 2021)|
| Time-series composed line chart  | for weekly income vs expenses (starts 2021/01/01) |
| Flat line | For all time-series chart showing calculated monthly+daily+weekly average income & expenses|
| Scattered chart | For instances of income & expense over time (count) |
| Pie chart | For income by currency |
| Vertical bar chart | For expenses by type (sortable) |
| Doughnut chart | For expenses by sub-type |
| Horizontal bar chart | For expenses by payment type |

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
