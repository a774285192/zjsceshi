var express = require('express');
var router = express.Router();
var mysql=require('mysql')


var pool=mysql.createPool({
	host:"localhost",
	user:'root',
	password:"123456",
	database:"ceshi",
	port:3306
})


/* GET home page. */
router.post('/', function(req, res, next) {
res.setHeader('Access-Control-Allow-Origin','*');
	
	pool.query(`SELECT * FROM kecheng `,function(err,rows){
		res.send(rows)
	}) 
});

router.post('/del', function(req, res, next) {
res.setHeader('Access-Control-Allow-Origin','*');
	
	pool.query(`DELETE FROM kecheng WHERE state=${req.body.state}`,function(err,rows){
		res.send(rows)
	}) 
});


router.use('/add', function(req, res, next) {
res.setHeader('Access-Control-Allow-Origin','*');
	
	pool.query(`INSERT INTO kecheng (ying,yuwen,shuxung,dili,zhengzhi,wuli,tiyu,sixiang,state) VALUES("${req.body.ying}","${req.body.shuxung}","${req.body.yuwen}","${req.body.dili}","${req.body.wuli}","${req.body.zhengzhi}","${req.body.tiyu}","${req.body.sixiang}","1")`,function(err,rows){
		res.send(rows)
	}) 
});

router.post('/update', function(req, res, next) {
res.setHeader('Access-Control-Allow-Origin','*');
	
	pool.query(`UPDATE kecheng SET state="${req.body.state}" WHERE id="${req.body.id}"`,function(err,rows){
		res.send(rows)
	}) 
});




module.exports = router;
