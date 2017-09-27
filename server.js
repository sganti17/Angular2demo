var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
 bcrypt = require('bcryptjs');
mongoose = require('mongoose');

mongoose.connect('localhost:27017/angular2');



var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database Up and Running!');
});



app.use(express.static('dist'));
app.use(bodyParser.urlencoded({'extended':false}));
app.use(bodyParser.json());


var Schema = mongoose.Schema;



var productSchema = new Schema({

  productId:   String,
  productName:  String,
  productCode: String,
  releaseDate:   String,
  description: String,
  price: String,
  starRating: Number,
  imageUrl:String
});

var Blog4 = mongoose.model('productdetails2', productSchema);


exports.create = function(newUser, callback){
  bcrypt.genSalt(10,function(err, salt){
    bcrypt.hash(newUser.password, salt,  function(err, hash){
      if(err) throw err;
      newUser.password=hash;
      newUser.save(callback);
    });
  });
}



app.get('/',function (req,res) {
  res.sendFile(__dirname+'/dist/index.html');

});





app.get('/products2',function(req,res){
  console.log("inside server");
  db.collection('productdetails2').find({}).toArray(function(err, products){
    if(err){
      console.log(err);
      res.json(err);
    }
    else{
      res.json(products);
    }
  });
});




app.post('/addproducts', function(req, res){
  console.log('inside addd products')
  var newUser = {
    productId: req.body.productId,
    productName: req.body.productName,
    productCode: req.body.productCode,
    releaseDate: req.body.releaseDate,
    description: req.body.description,
    price: req.body.price,
    starRating: req.body.starRating,
    imageUrl: req.body.imageUrl
  };
console.log(newUser);
Blog4.create(newUser,function(err, user) {
  if (err) {
    res.json({ success: false, msg: 'Failed to register user ' + err });
  }
  else {
    res.json({ success: true, msg: 'User registered' });
}
});
});






app.listen('8081', function(){
  console.log('server is listening on port 8081');
});

