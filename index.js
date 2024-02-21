import 'dotenv/config';
import { Client, GatewayIntentBits, Collection, Events } from 'discord.js';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { readdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const foldersPath = join(__dirname, 'commands');
const commandFolders = readdirSync(foldersPath);

const DiscordClient = new Client({ intents: [GatewayIntentBits.Guilds] });

DiscordClient.commands = new Collection();

for (const file of commandFolders) {
  // TODO: file:// need only for Windows, find a way get System and dinamically set path
  let command = await import(`file://${join(foldersPath, file)}`);
  DiscordClient.commands.set(command.data.name, command);
}

DiscordClient.login(process.env.DISCORD_TOKEN);

DiscordClient.once(Events.ClientReady, (readyClient) => {
  console.log(`success logging as ${readyClient.user.tag}`);
});
