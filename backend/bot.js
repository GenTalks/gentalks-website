require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', async () => {
  console.log(`🤖 Logged in as ${client.user.tag}`);
  
  try {
    const guild = await client.guilds.fetch(process.env.GUILD_ID);
    console.log(`✅ Server: ${guild.name}`);
    console.log(`👥 Member Count: ${guild.memberCount}`);
  } catch (err) {
    console.error('❌ Failed to fetch member count:', err);
  }

  client.destroy(); 
});

client.login(process.env.DISCORD_TOKEN);
