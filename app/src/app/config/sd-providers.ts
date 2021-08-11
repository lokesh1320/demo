import { SDBaseService } from 'app/n-services/SDBaseService';
//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-client
import { client } from '../sd-services/client';
//CORE_REFERENCE_IMPORT-clientservice
import { clientservice } from '../sd-services/clientservice';

export const sdProviders = [
  SDBaseService,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-client
  client,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-clientservice
  clientservice,
];
