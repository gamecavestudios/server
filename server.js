const http = require("http");
const express = require("express");
const app = express();

//
app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//////////////bot//////////

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Estoy listo!");
});

client.on("message", message => {
  if (message.content.startsWith("*ip")) {
    message.channel.send("gamingcave.ploudos.me");
  }
  if (message.content.startsWith("*jarvis?")) {
    message.channel.send("yes sir");
  }
});

client.on("guildMemberAdd", miembro => {
  var Canal = client.channels.find(
    channel => channel.id === "820121518813085707"
  );
  Canal.send(
    "welcome <@" +
      miembro.id +
      "> to the server\nand\n have a nice day! :D:D:D:D:D. :stuck_out_tongue_winking_eye: "
  );
});

client.login("ODIwMDkxNDEwNDg0OTUzMTI5.YEwHpA.VlOgndfxSgAaovUbd_Pp7LDcVao");
