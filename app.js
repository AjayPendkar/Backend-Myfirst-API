const express = require("Express");

const app = express();

const member =[{
  id : 1,
  name : "Ajay",


},
{
  id : 2,
  name : "Ajay",


},
{
  id : 3,
  name : "Ajay",


}]
 

app.listen(9000, function(req, res){
  console.log("Server started")
});

app.get("/",function(req, res){
  console.log("Hey Ajay")
  res.send("Hey Ajay ")
 

})

app.get("/nani",function(req,res){
  console.log("You are Practicing Routes Here")
  res.send("You are Practicing Routes Here")
})
app.get("/nani/:id",function(req,res){
  const id = req.params.id

  // console.log("You are Practicing Routes Here" + id)
  // res.send("You are Practicing Routes Here"+ id)

if( id==20 ){
  return res.send("Ajay")
}

if(id==21){
  return res.send("Sai kiran")
}
if(id==22){
  return res.send("Sanjay")
}
})

// My first API

app.get("/getAllMemb",(req, res)=>{

res.json(member)  
})