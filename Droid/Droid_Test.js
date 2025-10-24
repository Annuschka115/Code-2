export var Droid;
(function (Droid) {
    // let counter: boolean;
    // counter = true;
    // let command: Command;
    function getCommand() {
        const command = {
            module: "Chassis",
            method: "move",
            data: "left",
        };
        const random = Math.floor(Math.random() * 5);
        command.data = ["forward", "left", "back", "right", "stop"][random];
        // switch (random) {           //  putting that in array for readability
        //     case 0:
        //         command.data = "forward";
        //         break;
        //     case 1:
        //         command.data = "left";
        //         break;
        //     case 2:
        //         command.data = "back";
        //         break;
        //     case 3:
        //         command.data = "right";
        //         break;
        //     case 4:
        //         command.data = "stop";
        //     default:
        //         break;
        // }
        console.log(command);
        // if (counter == false) {
        //     command.data = "right";
        //     console.log("false");
        //     counter = true;
        // }
        // else {
        //     counter = false;
        //     console.log("false")
        // }    
        return command;
    }
    Droid.getCommand = getCommand;
})(Droid || (Droid = {}));
