import Sidebar from "./sidebar";
import ChatWindow from "./chatwindow";
import MessageInput from "./messageinput";
import Header from "./header";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { createOrUpdateChat } from "../Services/Api";
interface userDetails{
userName:string,
userEmail:string,
userId:string
}
export function MainComponent(){
    const [searchParams, setSearchParams] = useSearchParams();
    const chatId = searchParams.get("id"); // Get chatId from URL 
    const[messages,setMessages]=useState<any>([
        { role: "user", content: "Hello, how can I help you?" },       // User input
        { role: "assistant", content: "Hi! I need some information about your services." }, // Bot response
        { role: "user", content: "Sure! We offer AI-powered chat systems. What would you like to know?" }, 
        { role: "assistant", content: "Can you explain the pricing model?" }, 
        { role: "user", content: "Our pricing depends on the number of users and features you need. Do you need more details on custom plans?" }, 
        { role: "assistant", content: "Yes, please!" },{ role: "user", content: "Hello, how can I help you?" },       // User input
        { role: "assistant", content: "Hi! I need some information about your services." }, // Bot response
        { role: "user", content: "Sure! We offer AI-powered chat systems. What would you like to know?" }, 
        { role: "assistant", content: "Can you explain the pricing model?" }, 
        { role: "user", content: "Our pricing depends on the number of users and features you need. Do you need more details on custom plans?" }, 
        { role: "assistant", content: "Yes, please!" }
      ])
    const [userData,setUserData]=useState<userDetails>({
        userName:"John",
        userEmail:"john.doe@example.com",
        userId:"c31fc29b-f8b8-11ef-b3ac-3c0af3902f08"
        })

    // useEffect(()=>{},[])

const handleSend=async(input:string)=>{

    try {
        let lastestObj={role:"user",content:input}
        const updatedMessages = [...messages, lastestObj];
        setMessages(updatedMessages);
        console.log(updatedMessages);
        const result=await createOrUpdateChat({chatId:chatId,messages:updatedMessages,userId:userData.userId})
        console.log(result.data.data);
        if(result.status==201){
            if(!chatId){
                searchParams.set("id", result.data.chatId); // Update the query param
                setSearchParams(searchParams);
            }
            lastestObj={role:"assistant",content:result.data.data}
            const responseMessage = [...updatedMessages, lastestObj];
        setMessages(responseMessage);
        }
        
    } catch (error) {
        
    }
}







    return(
     <div className="main-container">
            <Sidebar />
            <div className="content-container">
              <Header />
              <ChatWindow messages={messages} />
              <MessageInput handleSend={handleSend} /> {/* 🔹 Fix applied here */}
            </div>
          </div>
    )
}