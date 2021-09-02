let exp = require('express')
let app = exp.Router()
let mysql = require('mysql')
let pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'miss'
})

app.get("/userday", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    pool.getConnection((err, conn) => {
        if (err) {
            return
        }
        let sql = 'select * from user'
        conn.query(sql, (err, data) => {
            conn.release()
            res.send({ code: 200, data: data })
        })
    })
})

module.exports = app