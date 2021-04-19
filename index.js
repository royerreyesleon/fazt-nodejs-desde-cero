// SISTEMA OPERATIVO
// const os = require('os');
// console.log("OS", os.platform());
// console.log("Version", os.release());
// console.log("Bytes", os.freemem());
// console.log("Total Memory", os.totalmem());


// CREAR ARCHIVO
// const fs = require('fs');
// CALL BACK , CODIGO ASINCRONO
// fs.writeFile('./texto.txt', 'linea uno', function(error){
//     if (error) {
//         console.log(error);
//     }
//     console.log('Archivo creado');
// })
// console.log('Ultima linea de codigo');


// LEER ARCHIVO
// fs.readFile('./texto.txt', function(err, data){
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })


// const http = require('http');

// const colors = require('colors')
// http.createServer( function (req, res){
//     // res.writeHead(200, { 'Content-type' : 'text/html' });
//     // res.write('<h1>Hola mundo</h1>');
//     res.writeHead(200, { 'Content-type' : 'text/plain' });
//     res.write('Texto');
//     res.end();
// }).listen('3000');


// // const manejadordelservidor
// // DECIRLE QUE ES LO QUE TIENE QUE HACER
// const handleServer = function (req, res){
//     res.writeHead(200, { 'Content-type' : 'text/html' });
//     res.write('<h1>Hola mundo</h1>');
//     res.end();
// }
// // CUANDO SE CREE EL SERVIDOR LLLAMAR AL LA FUNCION CREADA
// const server = http.createServer( handleServer );
// // ESCUCHAR EL SERVIDOR QUE A CREADO EN EL PUERTO 3000
// server.listen('3000', function () {
//     console.log('Servidor en puerto 3000'.green);
// });



// CREANDO SERVIDOR CON EXPRESS.
const express = require('express');
const colors = require('colors')

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Hola mundo</h1>');
    res.end();
})

server.listen(3001, () => {
    console.log('Puerto 3001'.yellow);
})