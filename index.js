require("dotenv").config(); // initialize dotenv
const { Client, Intents } = require("discord.js"); // importing discord.js
const firebase = require("firebase/app");
require("firebase/firestore");
var app = firebase.initializeApp({
    apiKey: "AIzaSyBg_lgxlG-tWrFTF1uKG2mYmqrKxaM3LV0",
    authDomain: "sidtron-47798.firebaseapp.com",
    projectId: "sidtron-47798",
    storageBucket: "sidtron-47798.appspot.com",
    messagingSenderId: "1060239593507",
    appId: "1:1060239593507:web:08872e3b931cd43102a196",
    measurementId: "G-MDHQLGN0VR",
});
const axios = require('axios');
const db = app.firestore();
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});
async function getMeme(){
    const res = await axios.get('https://memeapi.pythonanywhere.com/');
    return res.data.memes[0].url;
  }
var dateRem = "", plan = "", time = "", status = "";
client.on("message", async(msg) => {
    if (msg.content === ".help") {
        msg.reply("Going to help you guys plan out events!!");
    }
    else if (
        msg.content.substring(0, 4) === ".Add" ||
        msg.content.substring(0, 4) === ".add"
    ) {
        dateRem = msg.content.substring(5);
        msg.reply('Date has been set! Enter your plans one by one!');
    }
    else if(msg.content.substring(0, 6) === ".Event" || msg.content.substring(0, 6) === '.event') {
        plan = msg.content.substring(7);
        msg.reply('Plan added!! Enter the next plan')
    }
    else if(msg.content.substring(0, 5) === '.time' || msg.content.substring(0, 5) === '.Time')
    {
        time = msg.content.substring(6);
        msg.reply('Time added!');
    }
    else if(msg.content.substring(0, 7) === '.status' || msg.content.substring(0, 7) === '.Status')
    {
        status = msg.content.substring(8);
        msg.reply('The Status has updated!! Btw if not completed do it quick!')
    }
    else if(msg.content.substring(0, 5) === '.save' || msg.content.substring(0, 5) === '.Save')
    {
        db.collection(String(dateRem)).doc(String(plan)).set({
            time: time, 
            status: status
        })
        msg.reply('Finally Saved!')
    }
    else if(msg.content.substring(0, 5) === '.view' || msg.content.substring(0, 5) === '.view')
    {
        var content = ""; 
        const date = msg.content.substring(6);
        const dateEvent = db.collection(String(date));
        const snap = await dateEvent.get();
        if(snap.empty)
        {
            msg.reply('No plan as of now!');
        }
        else 
        {
            snap.forEach(doc => {
                let name = doc.id;
                let time = doc.data().time; 
                let stat = doc.data().status; 
                msg.reply(name + " was planned for " +  date  + " at " + time + " and the status is " + stat);
            })
        }
    }
    else if(msg.content.substring() === '.fact' || msg.content.substring(0, 5) === '.Fact')
    {
        msg.reply('Midhun is gay! Ranjith is forever a virgin! Siddharth is the best!')
    }
    else if(msg.content.substring(0, 5) === '.meme' || msg.content.substring(0, 5) === '.Meme')
    {
        msg.channel.send("Here's your meme!"); //Replies to user command
        const img = await getMeme(); //fetches an URL from the API
        msg.channel.send(img); //send the image URL
    }
});
client.login(process.env.CLIENT_TOKEN);
