import type { KeyBinding } from "@opentui/core";
import { BuildBar } from "./build-bar";

// Input Bar components takes two parameters : onsubmit handler - what will happen if input is submitted and disabled : whether input is disabled or enabled 
type Props = {
  onSubmit: ( text: string)  => void; 
  disabled?: boolean;  
} 


// KEYBINDINGS FOR TEXT AREA 

export const TEXTAREA_KEY_BINDINGS: KeyBinding[] = [
  { name: "return", action: "submit" },
  { name: "return", shift: true, action: "newline" },
];

export function InputBar({ onSubmit, disabled = false }: Props) { 
  return (
    <box width="100%" alignItems="center" > 
      <box
        width = "100%"
        border={["left"]}  
        borderColor= "cyan"
        
      > 
        <box
          width="100%"
          position="relative" 
          justifyContent="center" 
          paddingX={2} 
          paddingY={1} 
          backgroundColor="#1A1A24"   
          gap = {1}
        >
          <textarea width = "100%" keyBindings={TEXTAREA_KEY_BINDINGS} focused={!disabled} placeholder={`Ask anything... What's on your mind today ? `} /> 
          <BuildBar></BuildBar>
        </box>
        
      </box>
    </box>
  ); 
}