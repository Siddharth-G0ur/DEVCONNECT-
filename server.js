const express=require('express');
const connectDB=require('./config/db');
const app=express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({extended:false}));


app.get('/',(req,res)=>res.send('API Running'));

//Define Routes
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/posts',require('./routes/api/posts'));
app.use('/api/profile',require('./routes/api/profile'));



const PORT = process.env.PORT || 4050;  /* That process.env.PORT line is for the port that will be used when hosted on Heroku or 5000 port will be used in local */
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));