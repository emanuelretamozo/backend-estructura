import http from 'http';

const port = 3000;
const server = http.createServer();


server.on('listening', () => {
    console.log(`Servidor escuchando en el puerto 3000 ${port} ✅`);
});

server.on('error',  () => {
    if (error.code == 'EADDRINUSE') {
        console.log(`Elige otro puerto, el puerto ${port} está en uso.`);
    }
    console.log(`Error al escuchar en el puerto ${port}`);    
})


server.listen(port);    