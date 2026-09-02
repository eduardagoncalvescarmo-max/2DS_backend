// importação moderna com ESM (import)
import express from 'express'

const app = express() // Instanciar express

app.get('/', (reg, res) => {
    res.send(`<h3>Página inicial</h3>/n<p>Loja especializada em sapatos</p>`)
    })
    app.get('/sapatos', (req, res) => {
        res.send('Meu saoato de sair...!')
    })

    app.listen(3000, ()=>{console.log('Servidor está vivo!')})