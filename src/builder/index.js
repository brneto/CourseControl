
export const builderMiddleware = async (env = process.env.NODE_ENV) =>
 (env !== 'production'
   ? await import('./build.dev')
   : await import('./build.prod')
 ).default;

// export const builderMiddleware =
//   process.env.NODE_ENV !== 'production'
//     ? require('./build.dev')
//     : require('./build.prod');
