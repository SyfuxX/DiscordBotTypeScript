import { CommandInteraction } from 'discord.js';
import { consoleLog } from '../functions/console/logging';
import { CommandInterface } from '../models/command.interface';

export const command: CommandInterface = {
  name: 'commandName',
  // @ts-ignore
  data: null,
  run: async (interaction: CommandInteraction) => {
    consoleLog('Do something!');
  }
}
