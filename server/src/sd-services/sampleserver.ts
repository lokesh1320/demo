let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import * as safeStringify from 'fast-safe-stringify'; //_splitter_
import { spawn, execSync, fork } from 'child_process'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class sampleserver {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'sampleserver';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new sampleserver(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_sampleserver_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: sampleserver');

    let mw_directorymiddleware: Middleware = new Middleware(
      this.serviceName,
      'directorymiddleware',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_COxQGPTRdzJPmaDy(bh);
          //appendnew_next_sd_lVV75tgrSJDRwT55
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_lVV75tgrSJDRwT55');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName][
      'directorymiddleware'
    ] = mw_directorymiddleware;
    //appendnew_flow_sampleserver_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: sampleserver');

    if (!this.swaggerDocument['paths']['/getjsondata']) {
      this.swaggerDocument['paths']['/getjsondata'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getjsondata']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getjsondata`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.myrequest(bh);
          //appendnew_next_sd_AZNByZFom7YWe9pQ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_AZNByZFom7YWe9pQ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/exec']) {
      this.swaggerDocument['paths']['/exec'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/exec']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/exec`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'dirseq',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_P0BEIzhD2hKgcjBF(bh);
          //appendnew_next_sd_mEOHLsom1xFSiyKa
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_mEOHLsom1xFSiyKa');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'dirseq',
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getdatafrommongo']) {
      this.swaggerDocument['paths']['/getdatafrommongo'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getdatafrommongo']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getdatafrommongo`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_qaeiHbKMqyle8Fg9(bh);
          //appendnew_next_sd_h70YRaYtJ24AkBRe
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_h70YRaYtJ24AkBRe');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_sampleserver_HttpIn
  }
  //   service flows_sampleserver

  async mystartnode(...others) {
    try {
      var bh = {
        input: {},
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.sd_dvPqhaMjR7orup4W(bh);
      //appendnew_next_mystartnode
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EDowYWijBsKtc2H8');
    }
  }

  //appendnew_flow_sampleserver_start

  async myrequest(bh) {
    try {
      let requestOptions = {
        url: 'https://jsonplaceholder.typicode.com/posts',
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        rejectUnauthorized: undefined,
      };
      if (!false) {
        requestOptions.rejectUnauthorized = false;
      }
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.result = responseMsg;
      bh = await this.sd_nizQVjnv1Fbl7UXV(bh);
      //appendnew_next_myrequest
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9T6j2aWsYRL7CAcl');
    }
  }

  async sd_nizQVjnv1Fbl7UXV(bh) {
    try {
      let outputVariables = await this.mystartnode();
      await this.myhttpout(bh);
      //appendnew_next_sd_nizQVjnv1Fbl7UXV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nizQVjnv1Fbl7UXV');
    }
  }

  async myhttpout(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SBHHFf5tQOqWGdSO');
    }
  }

  async sd_dvPqhaMjR7orup4W(bh) {
    try {
      let logobj: any = 'data111';
      if (logobj instanceof Error) {
        log.info(logobj);
      } else {
        log.info(safeStringify.default(logobj));
      }
      //appendnew_next_sd_dvPqhaMjR7orup4W
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dvPqhaMjR7orup4W');
    }
  }

  //__server_service_designer_class_variable_declaration__dirresult
  dirresult: any;
  async sd_P0BEIzhD2hKgcjBF(bh) {
    try {
      bh.local.result = this.dirresult;
      await this.sd_aEbF0TdEPsrotKbI(bh);
      //appendnew_next_sd_P0BEIzhD2hKgcjBF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_P0BEIzhD2hKgcjBF');
    }
  }

  async sd_aEbF0TdEPsrotKbI(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aEbF0TdEPsrotKbI');
    }
  }

  async sd_COxQGPTRdzJPmaDy(bh) {
    try {
      bh.options = {
        cwd: 'C:/Users/9416',
        shell: true,
      };
      bh = await this.sd_zt8ha0AqxJiNu9GD(bh);
      //appendnew_next_sd_COxQGPTRdzJPmaDy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_COxQGPTRdzJPmaDy');
    }
  }

  async sd_zt8ha0AqxJiNu9GD(bh) {
    try {
      const result = execSync('dir', bh.options);
      bh.local.result = result.toString();
      bh = await this.sd_7ZjKWCawcgSs3G7w(bh);
      //appendnew_next_sd_zt8ha0AqxJiNu9GD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zt8ha0AqxJiNu9GD');
    }
  }

  async sd_7ZjKWCawcgSs3G7w(bh) {
    try {
      this.dirresult = bh.local.result;
      await this.sd_qEdFBuQD78NuBZRD(bh);
      //appendnew_next_sd_7ZjKWCawcgSs3G7w
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7ZjKWCawcgSs3G7w');
    }
  }

  async sd_qEdFBuQD78NuBZRD(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qEdFBuQD78NuBZRD');
    }
  }

  async sd_qaeiHbKMqyle8Fg9(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_gWtUPqvSwiN2ndzF',
        'tutorialspoint',
        bh.body,
        {}
      );
      await this.sd_nyGht5ymE6CCDrAj(bh);
      //appendnew_next_sd_qaeiHbKMqyle8Fg9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qaeiHbKMqyle8Fg9');
    }
  }

  async sd_nyGht5ymE6CCDrAj(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nyGht5ymE6CCDrAj');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_sampleserver_Catch
}
