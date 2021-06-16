export const formatDateString = (date: string) =>
  new Date(date).toLocaleString('default', { month: 'long', year: 'numeric' });
