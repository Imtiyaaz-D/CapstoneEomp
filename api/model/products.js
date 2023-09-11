const db = require('../config')
class Products{
    fetchProducts(req,res){
        const query =
        `
        SELECT prodID , prodName ,quantity ,amount ,Category , prodUrl
        FROM Products;
        `
        db.query(query, (err,results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchProduct(req,res){
        const query = `
        SELECT prodID ,prodName , quantity , amount , Category ,prodUrl
        FROM Products WHERE prodID = ${req.params.id};
        `
        db .query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    deleteProducts(req,res){
        const query = `
        DELETE FROM Products 
        WHERE prodID = ?
        `;
        db.query(query,[req.params.id],(err,results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    async addProduct(req, res){
        const data = req.body
        const query = `
            INSERT INTO Products
            SET ?;
        `
        db.query(query, [data], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg:"Product added successfully"
            })
        })
    }
    updateProducts(req,res){
        const query =`
        UPDATE  Products SET ?
        WHERE prodID = ${req.params.id};
        `
        db.query(query,[req.body],(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "A product has been added"
            })
        })
    }

}


module.exports = Products


























