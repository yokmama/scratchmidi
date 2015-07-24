/**
 * Created by masafumi on 2015/07/23.
 */
{
    var socketio;

    function startMidiClient() {
        socketio = io.connect('http://localhost:3000');
    }

    function noteOn(noteNumber, velocity){
        socketio.emit("noteOn", noteNumber, velocity);
    }

    function noteOff(noteNumber){
        socketio.emit("noteOff", noteNumber);
    }

    function channelPressure(pressure){
        socketio.emit("channelPressure", pressure);
    }
}