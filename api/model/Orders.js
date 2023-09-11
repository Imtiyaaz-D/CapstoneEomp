const db = require('../config')
class Orders{
    fetchOrder(req,res){
        const query =
        `
        SELECT orderID ,userID, prodID,orderDate
        FROM Orders;
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    addOrder(req,res){
        const query = 
        `
        INSERT INTO Orders SET ?
        `
        db.query(query,[req.body],(err)=>{
            if (err) throw err
            res.json({
                status:res.statusCode,
                results,
                msg:"Your order has been maded"
            })
        })
    }
    updateOrders(req,res){
        const query = 
        `
        UPDTATE Orders SET ?
        WHERE orderID = ${req.params.id};
        `
        db.query(query,[req.body],(err)=>{
            res.json({
                status:res.statusCode,
                msg: "Your order has been updated."
            })
        })
    }
    deleteOrder(req,res){
        const query = 
        `
        DELETE FROM Orders WHERE orderId = ?
        `
        db.query(query,[data],(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })

        
    }
}
module.exports = Orders