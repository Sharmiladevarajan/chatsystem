import Sidebar from "./sidebar";
import ChatWindow from "./chatwindow";
import MessageInput from "./messageinput";
import Header from "./header";
import { useEffect, useState } from "react";
import { createOrUpdateChat } from "../Services/Api";
interface userDetails{
userName:string,
userEmail:string,
userId:string
}
export function MainComponent(){
    const[messages,setMessages]=useState<any>([])
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
        const result=await createOrUpdateChat({chatId:"",messages:updatedMessages,userId:userData.userId})
        console.log(result.data.data);
        if(result.status==201){
            lastestObj={role:"bot",content:result.data.data}
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