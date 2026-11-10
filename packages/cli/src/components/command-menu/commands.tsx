import type { Command } from "./types"; 



export const COMMANDS : Command[] = [
  {
    name: "new", 
    description: "Start a new conversation.", 
    value: "/new", 
    
  }, 
  {
    name: "exit",  
    description: "Quit Carpediem", 
    value: "exit",  
    action: (ctx) => { // ctx :  context information and methods when command was executed 
      ctx.exit(); 
     }, 
  } , 
]; 