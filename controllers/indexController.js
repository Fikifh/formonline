const connection = require('../config/connection');

module.exports = index = function(rq, res, next){
    res.render('index', {value:'Form Online'});
}
module.exports = indexPost = async(req, res, next)=>{
    const nama = req.body.nama;
    const alamat = req.body.alamat;
    const noHp = req.body.noHp;    
    try {
        const query = await connection.query('INSERT INTO form(nama, alamat, noHp) values('+nama+','+alamat+','+noHp+')');
        connection.end()
        res.status(200).render('form-res', {message:'Thank you for your Response !'});
    } catch (error) {
        res.status(400).render('form-res', {message:error});
    }    
}