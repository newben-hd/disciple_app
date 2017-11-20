const env = {
  port: process.env.PORT || 8888,
  host: process.env.HOST || '0.0.0.0',
  get serverUrl(){
    return `http://${this.host}:${this.port}`;
  }
};

const logRequest = (req) => {
  console.log('======= REQUEST =======');
  console.log(`PATH: ${req.path}`);
  console.log(`BaseUrl: ${req.baseUrl}`);
  console.log(`HOSTNAME: ${req.hostname}`);
  console.log(`METHOD: ${req.method}`);
  console.log(`PARAMS: ${req.params}`);
  console.log(`QUERY: ${req.query}`);
  console.log('=======================');
  console.log();
};

const logResponse = (res) => {
  console.log('======= RESPONSE =======');
  console.log(`HeadersSent: ${res.headersSent}`);
  console.log('========================');
  console.log();
};

export { env, logRequest, logResponse };