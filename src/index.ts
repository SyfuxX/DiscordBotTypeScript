import {
  Client,
  Interaction,
} from 'discord.js';
import { IntentOptions } from './config/IntentOptions';
import { validateEnv } from './utils/validateEnv';

(async () => {
  if (!validateEnv()) return;
  
  const BOT = new Client({ intents: IntentOptions });
  
  BOT.on('ready', () => console.log('Bot is ready!'));
  BOT.on('messageCreate', () => console.log('A message has been sent!'));
  BOT.on('interactionCreate', (interaction: Interaction) => console.log(`Interaction happened: ${ interaction }`));
  BOT.on('unhandledRejection', (error: Error) => console.log(`Unhandled error: ${ error }`));
  BOT.on('disconnect', () => console.log('Shutting down...'));
  
  await BOT.login(process.env.DISCORD_TOKEN);
})();
