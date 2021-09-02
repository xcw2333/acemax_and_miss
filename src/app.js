let exp=require('express')
let app=exp()
//下面为后台模块
let lodin=require('./node/user_lodin')
let user_dey=require('./node/user_view')
app.use(exp.urlencoded({}))

app.use('/lodin',lodin)
app.use('/',user_dey)

app.use(exp.static('/home_root/public')) 
app.listen('8000',function () { 
    console.log('启动成功')
 })