export const builderMiddleware = async (env = process.env.NODE_ENV) =>
 (env !== 'production'
   ? await import('./build.dev')
   : await import('./build.prod')
 ).default;
