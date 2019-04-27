var express = require('express');
const controller = require('../controllers/indexController');
var router = express.Router();
const connection = require('../config/connection');



/* GET home page. */
router.get('/', function(req, res, netxt){
  res.render('index', {title:'Form Online'});
});
router.post('/post', async(req, res, next)=>{
  const data = {
    nama : req.body.nama,
    alamat : req.body.alamat,
    noHp : req.body.noHp
  }    
  connection.query('INSERT INTO form SET ?', data, function(error, result, fields){
    if(error) throw res.status(500).render('form-res', {title: error, message:error});
    res.status(200).render('form-res', {title:'thank you for your response ! ', message:'Thank you for your Response !'});
    console.log(result.insertId);
  });  
});

module.exports = router;
