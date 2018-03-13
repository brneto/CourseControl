export const getStore = async () => (
  process.env.NODE_ENV === 'production' ?
    await import('./configStore.prod'):
    await import('./configStore.dev')
).getStore();
