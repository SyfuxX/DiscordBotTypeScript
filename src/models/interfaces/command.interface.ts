import {
  SlashCommandBuilder,
  SlashCommandSubcommandsOnlyBuilder,
} from '@discordjs/builders';
import {
  CommandInteraction,
  SelectMenuInteraction,
} from 'discord.js';

export interface CommandInterface {
  name: string;
  data: Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand"> | SlashCommandSubcommandsOnlyBuilder;
  run: (interaction: CommandInteraction) => Promise<void>;
  select?: (interaction: SelectMenuInteraction) => Promise<void>;
}
