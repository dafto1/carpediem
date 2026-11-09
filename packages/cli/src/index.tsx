import { createCliRenderer, TextAttributes } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { Header } from "./components/header";
import { BuildBar } from "./components/build-bar";
import { InputBar } from "./components/input-bar";
function App() {
  return (
    <box
      alignItems="center"  
      justifyContent="center" 
      backgroundColor="#000D12"
      width="100%" 
      height="100%" 
      gap ={2}
    >
      <Header></Header> 
      <box width="100%" maxWidth={79} paddingX={2}>
        <InputBar onSubmit={()=>{}} />
      </box>
   </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);
