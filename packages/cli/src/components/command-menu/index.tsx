import type { RefObject } from "react"; 
import { ScrollBox, TextAttributes, type ScrollBoxRenderable } from "@opentui/core"; 
import { getFilteredCommands } from "./filter-commands";
import { COMMANDS } from "./commands";

const MAX_VIS_COMMANDS = 7; // no of commands that should be visible in the box

const COMMAND_COL_WIDTH = Math.max(...COMMANDS.map((cmd) => cmd.name.length)) + 4;  // calculates the length of name of each command in COMMANDS and then finds maximum in the array and then adds 4 as a standard padding

type CommandMenuProps = { 
  query: string;  
  selectedIndex: number; 
  scrollRef: RefObject<ScrollBoxRenderable | null>; 
  onSelect: (index: number) => void; 
  onExecute: (index: number) => void; 
  
  
}


// Command Menu Component 
export function CommandMenu({
  query, 
  selectedIndex,
  scrollRef, 
  onSelect, 
  onExecute, 
   
}: CommandMenuProps) {
  const filtered = getFilteredCommands(query);  // get the filtered commands 
  const visibleHeight = Math.min(filtered.length, MAX_VIS_COMMANDS);  
  if (filtered.length == 0) { 
    return (
      <box paddingX={1}>
        <text attributes={TextAttributes.DIM}> No matching commands </text>
      </box>
    )
  } 

  return (
    <scrollbox ref={scrollRef} height={visibleHeight}> 
      {filtered.map((cmd, i) => {
        const isSelected = i === selectedIndex;
      
        return (
          <box
            key={cmd.value}
            flexDirection="row"
            paddingX={1}
            height={1}
            overflow="hidden"
            backgroundColor={isSelected ? "#89B4F4" : undefined}
            onMouseMove={() => onSelect(i)}
            onMouseDown={() => onExecute(i)}
          >
            <box width={COMMAND_COL_WIDTH} flexShrink={0}>  
              <text selectable={false} fg={isSelected ? "black" : "white"}>
                /{cmd.name}
              </text>
            </box> 
            <box flexGrow={1} flexShrink={1} overflow="hidden" >
              <text selectable={false} fg={isSelected ? "black" : "gray"} >
                {cmd.description}
              </text>
            </box>
          </box>
        );
      })}
    </scrollbox>
  ); 
}