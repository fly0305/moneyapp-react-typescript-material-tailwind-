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

## ✨ Features

### General
| Category | Feature | Status |
| :--- | :---- | :---- |
| Date-range picker | Updates global date range values, which in tern will update all components that are using global date-range values | ✅ |
| Card | Display total income | ✅ |
| Card | Display total expenses | ✅ |
| Card | Display net-income | ✅ |
| Card | Display average daily income | ✅ |
| Card | Display average daily expenses | ✅ |
| Animation | Auto-increment amounts on all cards from zero on page-load in 1s | ⌛ |

### Dynamic charts
| Chart type | Description | Status |
| :--- | :---- | :---- |
| Pie chart | For income by payment method | ✅ |
| Doughnut chart | For income by income type | ✅ |
| Doughnut chart | For income by "paid by" | ✅ |
| Line chart | For daily income | ✅ |
| Area chart | Accumulated daily income vs expenses | ✅ |
| Horizontal bar chart | For expenses by type | ✅ |
| Stacked bar chart | Monthly income by type |
| Stacked bar chart | Monthly expenses by type |
| Time-series composed area chart   | For daily income vs expenses (starts 2021/01/01) |
| Time-series composed bar chart | For monthly income vs expenses (starts Jan 2021)|
| Time-series composed line chart  | for weekly income vs expenses (starts 2021/01/01) |
| Flat line | For all time-series chart showing calculated monthly+daily+weekly average income & expenses|
| Scattered chart | For instances of income & expense over time (count) |
| Pie chart | For income by currency |
| Doughnut chart | Daily expenses by sub-type |
| Horizontal bar chart | For expenses by payment type |

##  ✍️ How are charts getting updated - Architectural approach
| No. | Steps
| :--- | :--- |
| 1 | `GlobalDatePicker` from `Dashboard` updates the `Reactive variables` date-range (aka `startDate` and `endDate`)  stored in `Apollo client` |
| 2 | Custom chart wrapper (`/components/reports`) e.g, `IncomeByPaymentMethod` which uses `DoughnutChart`, takes date-range (`reactive variables`) from apollo client and populate them into their own `gql` queries as arguments
| 3 | Custom chart wrappers pass down fetched & processed data (`labels` and `values`) into `pure chart components`
| 4 | Each pure chart components populate data (no manual calculation involved)
| 5 | All chart wrapper that use `reactive variables` will update queries (so will charts update) whenever date-range changes in `Apollo client` store

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
