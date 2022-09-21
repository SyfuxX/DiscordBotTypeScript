import { Interaction } from 'discord.js';
import {
  executeSelectMenu,
  executeSlashCommand,
} from '../functions/command/executeCommand';

export const onInteraction = async (interaction: Interaction) => {
  if (interaction.isChatInputCommand()) await executeSlashCommand(interaction);
  if (interaction.isSelectMenu()) await executeSelectMenu(interaction);
}
