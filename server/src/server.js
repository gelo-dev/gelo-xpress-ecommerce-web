const app = require('./app');
const PORT = process.env.PORT

app.listen(PORT,()=>{
  console.log(`Sever Running in port ${PORT}`);  
});