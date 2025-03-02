interface ChatMessageProps {
    text: string;
    isUser: boolean;
  }
  
  const ChatMessage = ({ text, isUser }: ChatMessageProps) => {
    return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} my-2`}>
        <div
          className={`max-w-xs p-3 rounded-lg ${
            isUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
          }`}
        >
          {text}
        </div>
      </div>
    );
  };
  
  export default ChatMessage;