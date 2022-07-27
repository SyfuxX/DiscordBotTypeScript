import { ConsoleColorEnum } from '../../models/consoleColor.enum';
import { dateTime } from '../date/dateTime';

/**
 * Logging a message into the console.
 * Also adds a timespan in front of the message.
 *
 * @param {string} message - message which should be logged.
 * @param {ConsoleColorEnum} [color] - color in which the log will be printed.
 */
export const consoleLog = (message: string, color?: ConsoleColorEnum) => {
  const messageBody = `${ dateTime() } ${ message }\x1b[0m`;
  
  return color ? console.log(color, messageBody) : console.log(messageBody);
}
