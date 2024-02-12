import 'dotenv/config';
import { Client, GatewayIntentBits, Events } from 'discord.js';

const DiscordClient = new Client({ intents: [GatewayIntentBits.Guilds] });

DiscordClient.login(process.env.DISCORD_TOKEN);

DiscordClient.once(Events.ClientReady, (readyClient) => {
  console.log(`success logging as ${readyClient.user.tag}`);
});
