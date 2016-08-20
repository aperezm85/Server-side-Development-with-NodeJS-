var express = require('express'),
	morgan = require('morgan'),
	dishRouter = require('./dishRouter.js'),
	leaderRouter = require('./leaderRouter'),
	promoRouter = require('./promoRouter'),
	hostname = 'localhost',
	port = 3000,
	app = express();

app.use(morgan('dev'));


app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leadership', leaderRouter);

app.listen(port, hostname, function(){
  console.log('Server running at http://' + hostname + ':' + port);
});