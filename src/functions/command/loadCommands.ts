import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';
import { Client } from 'discord.js';
import * as fs from 'fs';
import { CommandCollection } from '../../index';
import { ConsoleColorEnum } from '../../models/consoleColor.enum';
import { consoleLog } from '../console/logging';

/**
 * Load all the files in the folder __/src/commands__ which not contain __-example__ in the name.
 * 
 * @param {Client} BOT - client which is required. 
 */
export const loadCommandFiles = async (BOT: Client) => {
  const slashCommandList = [];
  const commandFilesDirectory = `${process.cwd()}/prod/commands`;
  const commandFiles = fs.readdirSync(commandFilesDirectory)
    .filter((fileName: string) => fileName.endsWith('.js') && !fileName.includes('-example'));

  if (!commandFiles.length) {
    consoleLog(`No command files found.`,
      ConsoleColorEnum.info);

    return;
  }

  for (const commandFile of commandFiles) {
    const { command } = require(`${commandFilesDirectory}/${commandFile}`);

    CommandCollection.set(command.name, command);

    if (command.data) slashCommandList.push(command.data.toJSON());
    
    consoleLog(`Command file \x1b[1m${command.name}\x1b[22m has been loaded!`, ConsoleColorEnum.info);
  }
  
  if (slashCommandList.length) await loadSlashCommands(BOT, slashCommandList);
};

/**
 * Load slash commands to the server.
 * 
 * @param {Client} BOT - client which is required.
 * @param {any} slashCommandList - list of all the slash commands in {@link JSON} format.
 */
const loadSlashCommands = async (BOT: Client, slashCommandList: any) => {
  const rest = new REST({ version: '10' })
    .setToken(process.env.DISCORD_TOKEN as string);
  
  await rest.put(
    Routes.applicationGuildCommands(
      BOT.user?.id || 'missing id',
      process.env.DISCORD_GUILD_ID as string,
    ),
    { body: slashCommandList },
  );
};
