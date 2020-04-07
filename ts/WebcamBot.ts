import {KBBot, KBResponse, KBMessage} from "@elijahjcobb/keybase-bot-builder";
import {IncomingMessage} from "http";

(async (): Promise<void> => {

	console.log("Startup 1");

	// Bot declaration
	const webcamBot: KBBot = await KBBot.init("blizzard_t_husky", "erupt invest obey oblige smoke ritual club kiss wonder picnic keep average load", {
		logging: true, 			// whether all events should be logged
		debugging: true, 		// whether debugging mode should be enabled (allows extra commands)
		hostname: "Webcam-bot" 	// the hostname to show up in logs
	});

	console.log("Startup 2");

	// fetchCam command
	webcamBot.command({
		name: "fetchCam",
		description: "Fetch a still frame from the specified webcam.",
		usage: "!fetchCam camera_name <# of hours into past>",
		handler: async (msg: KBMessage, res: KBResponse): Promise<void> => {

			const camName: (number | string) = msg.getParameters()[0];
			let image: string = "[ERROR: Webcam not found]";
			// Switch statement for camera link
			switch (camName) {
				// Campus cams
				case "aerial":
					image = "http://webcams.mtu.edu/webcam16/webcam16.jpg";
					break;
				case ("huskystatue"):
					image = "http://webcams.mtu.edu/images/webcam26.jpg";
					break;
				case "mid":
					image = "http://webcams.mtu.edu/webcam7/webcam7.jpg";
					break;
				case "walker":
					image = "http://webcams.mtu.edu/webcam31/webcam31.jpg";
					break;
				case "sdc":
					image = "http://webcams.mtu.edu/webcam4/webcam4.jpg";
					break;
				case "clocktower":
					image = "http://webcams.mtu.edu/webcam25/webcam25.jpg";
					break;
				case "collegeave":
					image = "http://webcams.mtu.edu/webcam15/webcam15.jpg";
					break;
				case "bridge":
					image = "http://webcams.mtu.edu/webcam11/webcam11.jpg";
					break;
				case "ripley-ski":
					image = "http://webcams.mtu.edu/webcam30/webcam30.jpg";
					break;
				case "ripley":
					image = "http://webcams.mtu.edu/webcam21/webcam21.jpg";
					break;
				case "trails1":
					image = "http://webcams.mtu.edu/webcam14/webcam14.jpg";
					break;
				case "trails2":
					image = "http://webcams.mtu.edu/webcam13/webcam13.jpg";
					break;
				case "portage-north":
					image = "http://webcams.mtu.edu/images/webcam27.jpg";
					break;
				case "portage-west":
					image = "http://webcams.mtu.edu/images/webcam29.jpg";
					break;
				case "portage-east":
					image = "http://webcams.mtu.edu/images/webcam28.jpg";
					break;
				case "pressbox":
					image = "http://webcams.mtu.edu/images/webcam35.jpg";
					break;
				case "test":
					image = "TESTING";
					break;
			}

			console.log("Requested " + camName);

			const http = require('http');
			const fs = require('fs');

			const datestamp = Date.now().toString();
			console.log("Datestamp before: " + datestamp);
			const file = fs.createWriteStream("C:/Users/Kai/Desktop/Classes/19-20 Spring/CS3141 - Team Software Project/Project files/webcam_img/image" + datestamp + ".jpg");
			const request = http.get(image, function(response: IncomingMessage) {
				response.pipe(file);
			});

			// const pathString =

			console.log("Datestamp after: " + datestamp);

			await res.sendFile("C:/Users/Kai/Desktop/Classes/19-20 Spring/CS3141 - Team Software Project/Project files/webcam_img/image" + datestamp + ".jpg");

			// For testing only:
			// await res.sendFile("C:/Users/Kai/Desktop/Classes/19-20 Spring/CS3141 - Team Software Project/Project files/webcam_img/test.jpg");
			// await res.sendFile("C:/Users/Kai/Desktop/Classes/19-20 Spring/CS3141 - Team Software Project/Project files/webcam_img/image1585730977239.jpg");

		}
	});

	// listCam command
	webcamBot.command({
		name: "listCam",
		description: "List available webcams.",
		usage: "!listCam -r [region]",
		handler: async (msg: KBMessage, res: KBResponse): Promise<void> => {

			const camList: (string) =
				"Available webcams:\n" +
				"\taerial\n" +
				"\thuskystatue\n" +
				"\tmid\n" +
				"\twalker\n" +
				"\tsdc\n" +
				"\tclocktower\n" +
				"\tcollegeave\n" +
				"\tbridge\n" +
				"\tripley-ski\n" +
				"\tripley\n" +
				"\ttrails1\n" +
				"\ttrails2\n" +
				"\tportage-north\n" +
				"\tportage-west\n" +
				"\tportage-east\n" +
				"\tpressbox\n\n" +
				"Reply '!fetchCam [name]' to view one.";

			console.log("Listing available webcams...");
			await res.send(camList);
		}
	});

	// webcamBot.command({
	// 	name: "listRegions",
	// 	description: "List available campus regions.",
	// 	usage: "!listRegions",
	// 	handler: async (msg: KBMessage, res: KBResponse): Promise<void> => {
	// 		// TODO
	// 	}
	// });

	webcamBot.start();

})();