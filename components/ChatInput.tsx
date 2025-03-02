import { useState } from 'react';

interface ChatInputProps {
  onSend: (text: string) => void;
}

const ChatInput = ({ onSend }: ChatInputProps) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex p-2 bg-white">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 p-2 border rounded-l-lg"
        placeholder="Type a message..."
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-lg">
        Send
      </button>
    </form>
  );
};

export default ChatInput;