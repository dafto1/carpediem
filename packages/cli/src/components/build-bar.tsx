import { Text, TextAttributes } from "@opentui/core";

export function BuildBar() { 
  return (
    <box flexDirection="row" gap={1}>
      <text fg="cyan">Build</text> 
      <text attributes={TextAttributes.DIM} fg="gray">
        &#8250;
      </text>
      <text>gpt-sol-6.2</text>
    </box>
  )
}