
const express =require("express");
const path=require("path");
const app= express();
const hbs=require("hbs");
require("./db/conn");
const port=process.env.PORT || 3000;
const static_path=path.join(__dirname,"../public")
const template_path=path.join(__dirname,"../templates/views")
const partial_path=path.join(__dirname,"../templates/partials")
app.use(express.static(static_path))//static website host
app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partial_path);

app.get("/",(req,res)=>{
   
    res.render("index")//
});

app.get("/register",(req,res)=>{
    res.render("register");
})
app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})