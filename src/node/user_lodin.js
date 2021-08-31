let exp = require('express')
let app = exp.Router()
let mysql = require('mysql')
let pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'miss'
})
// 登陆
app.post('/lodins', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    pool.getConnection((err, conn) => {
        let errs = true
        let can = 'select * from user'
        conn.query(can, [], function (err, data) {
            data.forEach((item) => {
                if (item.mi == req.body.mi && item.zh == req.body.zh) {
                    res.send({ data: [item], code: '登陆成功' })
                    errs = false
                    return
                }
            })
            if (errs) {
                res.send({code:'登陆失败'})
                return
            }
        })
    })
})

// 注册
app.post('/zhu', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    let zhu_true = true
    pool.getConnection((err, conn) => {
        if (err) {
            return
        }
        // let can='insert into suer(mi,zh,type(quan),name) value(?,?,?,?)'
        let con = 'select zh from user'
        conn.query(con, (err, data) => {
            data.forEach((item) => {
                if (req.body.zh == item.zh) {
                    res.send('账号密码已经注册')
                    zhu_true = false
                }
            })
            if (zhu_true) {
                req.body.type = '普通村民'
                let cons = 'insert into user(mi,zh,type,name) value(?,?,?,?)'
                conn.query(cons, [req.body.mi, req.body.zh, 0, '普通村民'], function (err, data) {
                    if (err) {
                        console.log(err)
                    }
                    res.send({ data: [req.body], code: '注册成功' })
                })
            }
        })
    })
})


module.exports = app