//append_imports_start

import * as cors from 'cors'; //_splitter_
//append_imports_end
export let Middlewares = {
  sd_rnBLXiy6UsVrFxWU: () => {
    let corsOptions = {
      origin: true,

      credentials: false,

      preflightContinue: false,
    };
    return cors(corsOptions);
  },
  //appendnew_flow
};
