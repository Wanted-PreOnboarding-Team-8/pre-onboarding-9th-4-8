export const defaultDate =
  process.env.NODE_ENV === 'development'
    ? '2023-03-08'
    : new Date().toISOString().slice(0, 10);
