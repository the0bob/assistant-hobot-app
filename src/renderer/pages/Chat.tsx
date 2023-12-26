import { useState, useRef, KeyboardEvent, useEffect } from 'react';
import icon from '../../../assets/icon.png';

const testChatLog = [
  {
    id: '1',
    content: 'Test 1',
    owned: true,
    created: new Date('last tuesday'),
  },
  {
    id: '2',
    content: 'Test 2',
    owned: false,
    created: new Date('yesterday'),
  },
];

interface ChatMessage {
  id: string;
  content: string;
  owned?: boolean;
  created: Date;
}

function sortChatLog(chatLog: ChatMessage[]) {
  return chatLog.sort((a, b) => {
    return a.created.getTime() - b.created.getTime();
  });
}

function Chat() {
  const [chatLog, setChatLog] = useState([
    ...sortChatLog(testChatLog),
  ] as ChatMessage[]);
  const inputBuffer = useRef(null as HTMLTextAreaElement | null);
  const lastMessagePointer = useRef(null as HTMLDivElement | null);

  useEffect(() => {
    // scroll to last message
    lastMessagePointer?.current?.scrollIntoView();
  }, [chatLog]);
  const sendMessage = () => {
    if (!inputBuffer?.current?.value) return;

    // TODO: send message, retrieve object
    const message = {
      id: `${chatLog.length + 1}`,
      content: inputBuffer.current.value,
      owned: true,
      created: new Date(),
    } as ChatMessage;
    setChatLog((prevLog) => [...prevLog, message]);
  };

  const clearBuffer = () => {
    if (!inputBuffer?.current?.value) return;
    inputBuffer.current.value = '';
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
      clearBuffer();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">TEST</div>
      <div className="chat-log-wrapper">
        {chatLog.map((message, index) => {
          return (
            <div
              ref={index === chatLog.length - 1 ? lastMessagePointer : null}
              key={`${message?.id ?? index}`}
              className={`chat-log-message-${
                message?.owned ? 'sent' : 'recieved'
              }`}
            >
              {!message?.owned && <img width="48" alt="icon" src={icon} />}
              <div className="chat-log-message-content">{message.content}</div>
              {message?.owned && <img width="48" alt="icon" src={icon} />}
            </div>
          );
        })}
      </div>
      <div className="chat-input-wrapper">
        {/* TODO: attachment button */}
        <textarea
          ref={inputBuffer}
          onKeyDown={handleInputKeyDown}
          className="chat-input"
        />
        {/* TODO: more buttons */}
        <button className="chat-send" type="submit" onClick={sendMessage}>
          {'>'}
        </button>
      </div>
      {/* <div className="chat-keyboard">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        Placeholder Keyboard
      </div> */}
    </div>
  );
}

export default Chat;
