const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')

const db=mongoose.connection;
mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce",  {
    useNewUrlParser: true
  });

  db.on("connected",()=>{
    console.log("successfully connected")
  })
  db.on("error",()=>{
    console.log("error while connecting")
  })

  require('./models/user_model')
  require('./models/post_model')
  require('./models/category_model')
  require('./models/sub_category_model')

  app.use(cors());

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended:true}))
  app.use(require('./routes/user_route'))
  app.use(require('./routes/post_route'))
  app.use(require('./routes/user_related_route'))
  // app.use(  require('./ini'))
  
  app.listen(3300, () => {
    console.log("Server is running at port 3300");
  });