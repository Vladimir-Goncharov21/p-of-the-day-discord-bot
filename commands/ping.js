import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('ping-pong game');
export async function execute(interaction) {
  await interaction.reply('pong');
}
