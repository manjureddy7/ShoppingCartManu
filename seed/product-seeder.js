var Product=require('../models/product');

var mongoose=require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products=[
	new Product({
	imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
	title:'Gothic-video game',
	description:'Game with a bang.!!',
	price:450
	}),
	new Product({
	imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
	title:'Vice city Video game',
	description:'Awesome!!',
	price:300
	}),
	new Product({
	imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
	title:'Blur Manage game',
	description:'Get it right away!!',
	price:850
	})
	];

var done=0;

for(var i=0;i<products.length;i++){
	products[i].save(function(err,result){
		done++;
		if(done === products.length){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}