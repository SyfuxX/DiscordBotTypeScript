import { Client } from 'discord.js';
import { loadCommandFiles } from '../functions/command/loadCommands';
import { consoleLog } from '../functions/console/logging';
import { ConsoleColorEnum } from '../models/enums/consoleColor.enum';

export const onReady = async (BOT: Client) => {
  await loadCommandFiles(BOT);

  consoleLog(`\x1b[1m${BOT.user?.username || 'Bot'}\x1b[22m is ready & online!`, ConsoleColorEnum.info);
};
