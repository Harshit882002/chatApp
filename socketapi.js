const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log( "A user connected" );

    socket.on('sony',function(msg){
        console.log(msg)
        socket.broadcast.to(msg.roomName).emit('max',msg)
    })

    socket.on('joinRoom',function(roomName){
        socket.join(roomName)
    })
    
});
// end of socket.io logic

module.exports = socketapi;