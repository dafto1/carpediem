import type { Command } from "./types"; 
import { COMMANDS } from './commands'; 

export function getFilteredCommands(query: string): Command[] {
  if (query.length === 0) return COMMANDS;  // if no input has been typed , just show the list of all commands 
  return COMMANDS.filter((cmd)=> cmd.name.toLowerCase().startsWith(query.toLowerCase())) // search in COMMANDS list whether the query (converted to lowercase) matches the COMMANDS  
  
}