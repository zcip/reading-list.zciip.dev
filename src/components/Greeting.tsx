import { h } from "preact";
import { useState } from "preact/hooks";

type Prop = { messages: string[] };

export default function Greeting({ messages }: Prop) {
  const ramdomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(ramdomMessage())}>New Greeting</button>
    </div>
  );
}
