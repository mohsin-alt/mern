import  express  from "express";
const app = express();
app.get('/',(req,res)=>{
    res.send('<h1>Iam inn</h1>')
});
const port = 3000;

app.listen(port,()=>{
    console.log('Server is running');
})