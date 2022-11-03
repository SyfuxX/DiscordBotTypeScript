import { CommandInteraction } from 'discord.js';
import { consoleLog } from '../functions/console/logging';
import { CommandInterface } from '../models/interfaces/command.interface';

export const command: CommandInterface = {
  name: 'commandName',
  data: null,
  run: async (interaction: CommandInteraction) => {
    await interaction.deferReply({ ephemeral: true });
    
    consoleLog('Do something!');
  }
}
