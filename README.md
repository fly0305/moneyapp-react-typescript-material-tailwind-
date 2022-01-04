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
| Bar chart - horizontal | For expenses by type | ✅ |
| Bar chart - horizontal | For expenses by payment type | ✅ |
| Doughnut chart | Expenses by sub-type | ✅ |
| Doughnut chart | Expenses by currency | ✅ |
| Bar chart - stacked + vertical | Monthly income by type |
| Bar chart - stacked + vertical | Monthly expenses by type |
| Bar chart - grouped + horizontal | Monthly income vs expenses (starts Jan 2021)|
| Area chart  | Weekly income vs expenses (starts 2021/01/01) |
| Scattered chart | For instances of income & expense over time (count) |
| Pie chart | For income by currency |

### Authentication
| Domain | Feature | Status |
| :--- | :--- | :---- |
| UI | Login page UI | ✅ |
| UI | Forbidden page (403) UI | ✅ |
| UI | Dashboard page UI (Only for authenticated & authorised users) | ✅ |
| UI | Loading page UI | ✅ |
| Auth0 | Create account and login with Google | ✅ |
| Routing | Routing based on page component displayed | ⌛ |
| Auth0 | Create account and login with username and password | ⌛ |
| Auth0 | Retrieve password UI | ⌛ |

### Data tables
| Domain | Feature | Status |
| :--- | :--- | :---- |
| UI | Page UI for income table | ⌛ |
| UI | UI for editing income table rows | ⌛ |
| API | Form validation for editing rows in income table | ⌛ |
| UI | UI for creating new rows in income table | ⌛ |
| API | Form validation for creating new rows in income table | ⌛ |
| UI | Page UI for expenses table | ⌛ |
| UI | UI for editing expenses table rows | ⌛ |
| API | Form validation for editing rows in expenses table | ⌛ |
| UI | UI for creating new rows in expenses table | ⌛ |
| API | Form validation for creating new rows in income table | ⌛ |


##  ✍️ How are charts getting updated - Architectural approach
| No. | Steps
| :--- | :--- |
| 1 | `GlobalDatePicker` from `Dashboard` updates the `Reactive variables` date-range (aka `startDate` and `endDate`)  stored in `Apollo client` |
| 2 | Custom chart wrapper (`/components/reports`) e.g, `IncomeByPaymentMethod` which uses `DoughnutChart`, takes date-range (`reactive variables`) from apollo client and populate them into their own `gql` queries as arguments
| 3 | Custom chart wrappers pass down fetched & processed data (`labels` and `values`) into `pure chart components`
| 4 | Each pure chart components populate data (no manual calculation involved)
| 5 | All chart wrapper that use `reactive variables` will update queries (so will charts update) whenever date-range changes in `Apollo client` store

Note: simply updating apollo store in components from `/reports` using `makrVar` doesn't trigger rerender, but the hook `useReactiveVar` solved this problem.

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
