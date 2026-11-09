// code for header component of tui 
export function Header() { 
  return (
    <box justifyContent="center" alignItems="center"> 
      <box flexDirection="row" justifyContent="center" gap={0.5} alignItems="center" > 
        <ascii-font font ="tiny" text="Car" color ="gray"></ascii-font>
        <ascii-font font ="tiny" text="pediem" color="blue" ></ascii-font>
      </box>
    </box>
  )
}