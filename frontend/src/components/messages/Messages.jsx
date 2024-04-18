import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeletons/MessageSkeletons";
import Message from "./Message"
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const {messages,loading} = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavier: "smooth"});
      },100)
  },[messages]);
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length>0 && messages.map((messages) =>(
        <div key={messages._id} ref={lastMessageRef}>
          <Message message = {messages} />
        </div>
      ))}
        {loading && [...Array(3)].map((_,idx) => <MessageSkeleton key={idx} />)}
        {!loading && messages.length ===0 && (
          <p className = 'text-center'>Send a message to start the conversation</p>
        )}
    </div>
  )
}

export default Messages;



// starter code for the snippit

// import Message from "./Message"

// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
      
//     </div>
//   )
// }

// export default Messages
