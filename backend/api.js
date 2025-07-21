require('dotenv').config();
const express = require('express');
const cors = require('cors');          
const { Client, GatewayIntentBits } = require('discord.js');

const app = express();
const port = 5174;

app.use(cors());                      

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

let memberCount = 0;

client.once('ready', async () => {
  console.log(`🤖 Bot ready: ${client.user.tag}`);
  const guild = await client.guilds.fetch(process.env.GUILD_ID);
  memberCount = guild.memberCount;
});

app.get('/members', (req, res) => {
  res.json({ memberCount });
});

client.login(process.env.DISCORD_TOKEN);

app.listen(port, () => {
  console.log(`🌐 Server running at http://localhost:${port}/members`);
});
