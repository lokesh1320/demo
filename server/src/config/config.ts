export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [{ __ssdGlobalMiddlewares__: 'sd_rnBLXiy6UsVrFxWU' }],
    post: [],
    sequences: {
      dirseq: { pre: [{ sampleserver: 'directorymiddleware' }], post: [] },
    },
  },
};
