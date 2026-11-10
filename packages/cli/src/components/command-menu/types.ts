

export type CommandContext = {  // structure of the ctx object 
  exit: () => void
}; 

export type Command = { // defines structure of the command object( declared in commands.tsx ) 
  name: string;  
  description: string; 
  value: string; 
  action?: (ctx: CommandContext) => void | Promise<void>;  // Command Context is passed down to Command Type 
}