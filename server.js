import express from 'express';
import {env, logRequest, logResponse} from './config';

const app = express();
app.listen(env.port,env.host,()=>{
  console.log('Listening to port: '+env.port);
});
app.use((req,res,next)=>{
  logRequest(req);
  logResponse(res);
  next();
});
/*********** Write HTTP route here *************/

app.get('/',(req,res)=>{
  res.send('Hello World!');
});








/***********************************************/
app.use(express.static('public'));