var express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

const lista = [];

app.get("/", (req, res, next) => {
    res.sendFile('index.html', { root: __dirname });
});

app.get("/mostrarlista", (req, res, next) => {
    res.json(lista);
});

app.post('/add', (request, response) => {
    lista.push({itemLista: request.body.itemLista, id: lista.length+1});
    response.json(lista);
});

app.post('/remove', (request, response)=> {
    for(let i=0; i<lista.length; i++){
        if(request.body.itemLista==lista[i].id){
            lista.splice(i,1);
        }
    }
    response.json(lista);
})