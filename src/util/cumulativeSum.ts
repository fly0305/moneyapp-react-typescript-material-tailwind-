export const cumulativeSum = (
  (sum) => (value: any) =>
    (sum += value).toFixed(2)
)(0);
