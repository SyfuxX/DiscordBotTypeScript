import {
  Client,
  Collection,
  Interaction,
} from 'discord.js';
import { IntentOptions } from './config/IntentOptions';
import { onInteraction } from './events/interaction';
import { onReady } from './events/ready';
import { consoleLog } from './functions/console/logging';
import { ConsoleColorEnum } from './models/enums/consoleColor.enum';
import { CommandInterface } from './models/interfaces/command.interface';
import { validateEnv } from './utils/validateEnv';

export const CommandCollection: Collection<string, CommandInterface> = new Collection();

(async () => {
  if (!validateEnv()) return;

  const BOT = new Client({ intents: IntentOptions });

  BOT.on('ready', async () => await onReady(BOT));
  BOT.on('messageCreate', async () => consoleLog('A message has been sent!', ConsoleColorEnum.info));
  BOT.on('interactionCreate', async (interaction: Interaction) => await onInteraction(interaction));
  BOT.on('unhandledRejection', async (error: Error) => consoleLog(`Unhandled error: ${ error }`, ConsoleColorEnum.error));
  BOT.on('disconnect', async () => consoleLog('Shutting down...', ConsoleColorEnum.info));

  await BOT.login(process.env.DISCORD_TOKEN);
})();
