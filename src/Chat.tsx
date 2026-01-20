import { useOptimistic, startTransition } from "react";

type ChatProps = {
  messages: string[];
};

function Chat({ messages }: ChatProps) {
  console.log(messages);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    string[],
    string
  >(messages, (oldMessages, newMessage) => [...oldMessages, newMessage]);

  async function sendMessage() {
    startTransition(() => {
      addOptimisticMessage("Awesome!");
    });
    await serverFunction("Awesome!");
  }

  async function serverFunction(message: string) {
    return new Promise((resolve) => setTimeout(resolve, 3000));
  }

  return (
    <main>
      <button
        onClick={sendMessage}
        className="bg-gray-500 text-white py-2 px-3 cursor-pointer text-lg"
      >
        Send Message
      </button>
      {optimisticMessages.map((msg, index) => (
        <div key={index}>{msg}</div>
      ))}
    </main>
  );
}
export default Chat;
