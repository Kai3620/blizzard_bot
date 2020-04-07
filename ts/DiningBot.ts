import {KBBot, KBResponse, KBMessage} from "@elijahjcobb/keybase-bot-builder";

(async (): Promise<void> => {

    const diningBot: KBBot = await KBBot.init("blizzard_t_husky", "erupt invest obey oblige smoke ritual club kiss wonder picnic keep average load", {
        logging: true,
        debugging: true,
        hostname: "Dining-bot"
    });

    diningBot.command({
        name: "breakfast",
        description: "Send today's breakfast menu",
        usage: "!breakfast [hall_name]",
        handler: async (msg: KBMessage, res: KBResponse): Promise<void> => {

            const hallName: (number | string) = msg.getParameters()[0];
            const day: (number | string) = msg.getParameters()[1];
            let menuJSON = null;
            let menu: string = "Menu not found.";
            switch (hallName) {
                case "mcnair":
                    menuJSON = require("../McNair-FA19.json");
                    if (day == null) {
                        menu = "Today's breakfast:\n\t" + menuJSON.month[0].days[0].breakfast;
                    } else if (day == "Saturday" || day == "Sunday") {
                        menu = "Sorry, McNair Dining Hall is closed on Saturday and Sunday."
                    } else {
                        for (let i = 0; i < menuJSON.month[0].days.length; i++) {
                            if (menuJSON.month[0].days[i].dayName == day) {
                                menu = day + "'s breakfast:\n\t" + menuJSON.month[0].days[i].breakfast;
                                break;
                            }
                        }
                    }
                    /*
                    switch (day) {
                        case null:
                            menu = "Today's breakfast:\n\t" + menuJSON.month[0].days[0].breakfast;
                            break;
                        case "Monday":
                            for (let i = 0; i < menuJSON.month[0].days.length; i++) {
                                if (menuJSON.month[0].days[i].dayName == day) {
                                    menu = day + "'s breakfast:\n\t" + menuJSON.month[0].days[i].breakfast;
                                    break;
                                }
                            }
                            break;
                        case "Tuesday":
                            for (let i = 0; i < menuJSON.month[0].days.length; i++) {
                                if (menuJSON.month[0].days[i].dayName == "Tuesday") {
                                    menu = "Tuesday's breakfast:\n\t" + menuJSON.month[0].days[i].breakfast;
                                    break;
                                }
                            }
                            break;
                        case "Wednesday":
                            break;
                        case "Thursday":
                            break;
                        case "Friday":
                            break;
                        case "Saturday":
                            break;
                        case "Sunday":
                            break;
                    }
                    */
                    break;
                case "wads":
                    menuJSON = require("../Wads-FA19.json");
                    if (day == null) {
                        menu = "Today's breakfast:\n\t" + menuJSON.month[0].days[0].breakfast;
                    } else {
                        for (let i = 0; i < menuJSON.month[0].days.length; i++) {
                            if (menuJSON.month[0].days[i].dayName == day) {
                                menu = day + "'s breakfast:\n\t" + menuJSON.month[0].days[i].breakfast;
                                break;
                            }
                        }
                    }
                    break;
                case "dhh":
                    menuJSON = require("../DHH-FA19.json");
                    if (day == null) {
                        menu = "Today's breakfast:\n\t" + menuJSON.month[0].days[0].breakfast;
                    } else if (day == "Saturday" || day == "Sunday") {
                        menu = "Sorry, DHH Dining Hall is closed on Saturday and Sunday."
                    } else {
                        for (let i = 0; i < menuJSON.month[0].days.length; i++) {
                            if (menuJSON.month[0].days[i].dayName == day) {
                                menu = day + "'s breakfast:\n\t" + menuJSON.month[0].days[i].breakfast;
                                break;
                            }
                        }
                    }
                    break;
            }

            await res.send(menu);

        }
    });

    diningBot.command({
        name: "lunch",
        description: "Send today's lunch menu",
        usage: "!lunch [hall_name]",
        handler: async (msg: KBMessage, res: KBResponse): Promise<void> => {
            const hallName: (number | string) = msg.getParameters()[0];
            const day: (number | string) = msg.getParameters()[1];
            let menuJSON = null;
            let menu: string = "Menu not found.";
            switch (hallName) {
                case "mcnair":
                    menuJSON = require("../McNair-FA19.json");
                    if (day == null) {
                        menu = "Today's lunch:\n\t" + menuJSON.month[0].days[0].lunch;
                    } else if (day == "Saturday" || day == "Sunday") {
                        menu = "Sorry, McNair Dining Hall is closed on Saturday and Sunday."
                    } else {
                        for (let i = 0; i < menuJSON.month[0].days.length; i++) {
                            if (menuJSON.month[0].days[i].dayName == day) {
                                menu = day + "'s lunch:\n\t" + menuJSON.month[0].days[i].lunch;
                                break;
                            }
                        }
                    }
                    break;
                case "wads":
                    menuJSON = require("../Wads-FA19.json");
                    if (day == null) {
                        menu = "Today's lunch:\n\t" + menuJSON.month[0].days[0].lunch;
                    } else {
                        for (let i = 0; i < menuJSON.month[0].days.length; i++) {
                            if (menuJSON.month[0].days[i].dayName == day) {
                                menu = day + "'s lunch:\n\t" + menuJSON.month[0].days[i].lunch;
                                break;
                            }
                        }
                    }
                    break;
                case "dhh":
                    menuJSON = require("../DHH-FA19.json");
                    if (day == null) {
                        menu = "Today's lunch:\n\t" + menuJSON.month[0].days[0].lunch;
                    } else if (day == "Saturday" || day == "Sunday") {
                        menu = "Sorry, DHH Dining Hall is closed on Saturday and Sunday."
                    } else {
                        for (let i = 0; i < menuJSON.month[0].days.length; i++) {
                            if (menuJSON.month[0].days[i].dayName == day) {
                                menu = day + "'s lunch:\n\t" + menuJSON.month[0].days[i].lunch;
                                break;
                            }
                        }
                    }
                    break;
            }

            await res.send(menu);
        }
    });

    diningBot.command({
        name: "dinner",
        description: "Send today's dinner menu",
        usage: "!dinner [hall_name]",
        handler: async (msg: KBMessage, res: KBResponse): Promise<void> => {
            const hallName: (number | string) = msg.getParameters()[0];
            const day: (number | string) = msg.getParameters()[1];
            let menuJSON = null;
            let menu: string = "Menu not found.";
            switch (hallName) {
                case "mcnair":
                    menuJSON = require("../McNair-FA19.json");
                    if (day == null) {
                        menu = "Today's dinner:\n\t" + menuJSON.month[0].days[0].dinner;
                    } else if (day == "Saturday" || day == "Sunday") {
                        menu = "Sorry, McNair Dining Hall is closed on Saturday and Sunday."
                    } else {
                        for (let i = 0; i < menuJSON.month[0].days.length; i++) {
                            if (menuJSON.month[0].days[i].dayName == day) {
                                menu = day + "'s dinner:\n\t" + menuJSON.month[0].days[i].dinner;
                                break;
                            }
                        }
                    }
                    break;
                case "wads":
                    menuJSON = require("../Wads-FA19.json");
                    if (day == null) {
                        menu = "Today's dinner:\n\t" + menuJSON.month[0].days[0].dinner;
                    } else {
                        for (let i = 0; i < menuJSON.month[0].days.length; i++) {
                            if (menuJSON.month[0].days[i].dayName == day) {
                                menu = day + "'s dinner:\n\t" + menuJSON.month[0].days[i].dinner;
                                break;
                            }
                        }
                    }
                    break;
                case "dhh":
                    menu = "Sorry, DHH Dining Hall doesn't serve dinner."
                    break;
            }

            await res.send(menu);
        }
    });

    diningBot.command({
        name: "menuPDF",
        description: "Send this week's menu PDF link",
        usage: "!menuPDF [hall_name]",
        handler: async (msg: KBMessage, res: KBResponse): Promise<void> => {
            const hallName: (number | string) = msg.getParameters()[0];
            if (hallName == "mcnair") {
                await res.sendFile("C:/Users/Kai/Desktop/Classes/19-20 Spring/CS3141 - Team Software Project/Project files/menu_pdf/oct28-nov3.pdf")
            } else {
                await res.send("Sorry, not found.")
            }
        }
    });

    diningBot.start();

})();