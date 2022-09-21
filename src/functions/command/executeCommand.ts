import {
  ChatInputCommandInteraction,
  Message,
  SelectMenuInteraction,
} from 'discord.js';
import { CommandCollection } from '../../index';

export const executeSlashCommand = async (interaction: ChatInputCommandInteraction): Promise<void> => {
  const command = CommandCollection.get(interaction.commandName);
  
  if (command) await command.run(interaction);
};

export const executeCommand = async (message: Message): Promise<void> => {
  
};

export const executeSelectMenu = async (interaction: SelectMenuInteraction): Promise<void> => {
  const command = CommandCollection.get(interaction.message.interaction.commandName);

  if (command) await command.select(interaction);
}
