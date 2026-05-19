const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();

app.use(cors());

const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'uploads/');
  },

  filename: function(req,file,cb){
    cb(null,Date.now() + '-' + file.originalname);
  }
});

const upload = multer({storage:storage});

app.post('/upload', upload.single('movie'), (req,res)=>{

  res.json({
    message:'Movie Uploaded Successfully',
    file:req.file
  });

});

app.listen(5000,()=>{
  console.log('Server Running On Port 5000');
});