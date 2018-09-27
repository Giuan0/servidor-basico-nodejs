let app = require('express')()


app.get('/teste', (req, res)=>{
    console.log('requisição')
    return res.json({data: 'ok!'})
})

app.listen(3000, ()=>{
    console.log('rodando na porta 3000')
})