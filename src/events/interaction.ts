import { Interaction } from 'discord.js';
import { executeSlashCommand } from '../functions/command/executeCommand';

export const onInteraction = async (interaction: Interaction) => {
  if (interaction.isChatInputCommand()) await executeSlashCommand(interaction);
}
