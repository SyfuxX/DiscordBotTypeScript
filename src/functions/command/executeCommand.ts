import {
  ChatInputCommandInteraction,
  Message,
} from 'discord.js';
import { CommandCollection } from '../../index';

export const executeSlashCommand = async (interaction: ChatInputCommandInteraction) => {
  const command = CommandCollection.get(interaction.commandName);
  
  if (command) await command.run(interaction);
};

export const executeCommand = async (message: Message) => {
  
};
