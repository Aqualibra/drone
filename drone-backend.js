var Cylon = require('cylon');
var bot;

// Initialise the robot
Cylon.robot()
    .connection("ardrone", {
        adaptor: 'ardrone',
        port: '192.168.1.1'
    })
    .device("drone", {
        driver: "ardrone",
        connection: "ardrone"
    })
    .on("ready", fly);
    
// Fly the bot

function fly(robot) {

    bot = robot;

    bot.drone.disableEmergency();

    bot.drone.ftrim();

    bot.drone.takeoff();

    after(5*1000, function() {
        bot.drone.left(0.2);
    });

    after(7*1000, function() {
        bot.drone.forward(0.2);
    });

    after(9*1000, function() {
        bot.drone.right(0.2);
        });

    after(11*1000, function() {
        bot.drone.back(0.2);
    });

    after(13*1000, function() {
        bot.drone.land();
    });

    after(18*1000, function() {
        bot.drone.stop();
    });
}

Cylon.start();
