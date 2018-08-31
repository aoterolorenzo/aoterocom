// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  region: 'us-east-1',

  identityPoolId: 'us-east-1:fbe0340f-9ffc-4449-a935-bb6a6661fd53',
  userPoolId: 'eu-west-1_8Cr2p84O1',
  clientId: '1grsjtuckh1vp293p44pb57au2',

  rekognitionBucket: 'rekognition-pics',
  albumName: 'usercontent',
  bucketRegion: 'eu-west-1',

  ddbTableName: 'LoginTrail',

  cognito_idp_endpoint: '',
  cognito_identity_endpoint: '',
  sts_endpoint: '',
  dynamodb_endpoint: '',
  s3_endpoint: ''
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
