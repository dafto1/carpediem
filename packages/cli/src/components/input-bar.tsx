import type { KeyBinding } from "@opentui/core";
import { BuildBar } from "./build-bar";
import { useRef, useCallback, useEffect } from "react"; 
import { CommandMenu } from "./command-menu"; 
import { TextareaRenderable } from "@opentui/core";
import { useRenderer } from "@opentui/react";
import type { Command } from "./command-menu/types"; 

import { useCommandMenu } from "./command-menu/useCmdMenuHook";
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
  const textareaRef = useRef<TextareaRenderable>(null); 
  const onSubmitRef = useRef<() => void>(() => { }); 
  const renderer = useRenderer();  
  const {
    showCommandMenu,
    commandQuery,
    selectedIndex,
    scrollRef,
    handleContentChange,
    resolveCommand,
    setSelectedIndex
  } = useCommandMenu();  
  const handleSubmit = useCallback(() => {
    if (disabled) return; 
    const textarea = textareaRef.current; 
    if (!textarea) return; 

    const text = textarea.plainText.trim();
    if (text.length == 0) return; 
    onSubmit(text);  
    textarea.setText(" ")
  }, [disabled ,onSubmit])
  const handleCommand = useCallback((
    command: Command | undefined 
  ) => {
    const textarea = textareaRef.current; 
    if (!textarea || !command) {
      return; 
    }
    textarea.setText(""); 
    if (command.action) {
      command.action({
        exit :()=>renderer.destroy() , 
      })
    }
    else { 
      textarea.insertText(command.value + " "); 
    }
  }, [renderer]) 
  
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.onSubmit = () => {
      onSubmitRef.current();
    }
  }, []);  

  onSubmitRef.current = () => {
    if (disabled) return; 
    if (showCommandMenu) {
      const command = resolveCommand(selectedIndex); 
      handleCommand(command);
      return; 
    }
    handleSubmit(); 
  }
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
          {true && (
            <box
              position="absolute" 
              bottom="100%" left={0} 
              
            ></box>
              
          )}
          <textarea width="100%" keyBindings={TEXTAREA_KEY_BINDINGS} focused={!disabled} placeholder={`Ask anything... What's on your mind today ? `} /> 
          <CommandMenu  query=""></CommandMenu>
          <BuildBar></BuildBar>
        </box>
        
      </box>
    </box>
  ); 
}