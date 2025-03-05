import Sidebar from "./sidebar";
import ChatWindow from "./chatwindow";
import MessageInput from "./messageinput";
import Header from "./header";
import { useEffect, useState } from "react";
import {  useNavigate, useSearchParams } from "react-router-dom";
import { createOrUpdateChat ,fetchChatHistory,fetchAllChats} from "../Services/Api";
interface userDetails{
userName:string,
userEmail:string,
userId:string
}
export function MainComponent(){
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate=useNavigate()
    const chatId = searchParams.get("id"); // Get chatId from URL 
    const[messages,setMessages]=useState<any>([])
    const [pastChats,setPastChats]=useState<any>([
        { chatId: "1", chatName: "Chat 1" },
        { chatId: "2", chatName: "Chat 2" },
        { chatId: "3", chatName: "Chat 3" },
        { chatId: "4", chatName: "Chat 4" },
        { chatId: "5", chatName: "Chat 5" },
        { chatId: "6", chatName: "Chat 6" },
        { chatId: "7", chatName: "Chat 7" },
      ])
    
    const [userData,setUserData]=useState<userDetails>({
        userName:"John",
        userEmail:"john.doe@example.com",
        userId:"c31fc29b-f8b8-11ef-b3ac-3c0af3902f08"
        })

    useEffect(()=>{
if(userData){
    if(chatId){
        getChatHistory(chatId)
    }else{
        getAllChats()
    }
}else{
    navigate("/")
}

    },[])
const getAllChats=async()=>{
    try {
        const getChats=await fetchAllChats({userId:userData.userId})
        if(getChats.status==201){
            setPastChats(getChats.data)
        }
    } catch (error) {
        console.log();
        
    }
}

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
        console.log(error,"in handlesend funciton");
        
    }
}

const getChatHistory=async(currentChatId:string)=>{
    try {
       
        if(currentChatId!==""){
            searchParams.set("id", currentChatId); // Update the query param
            setSearchParams(searchParams);
        const getHistory=await fetchChatHistory({chatId:currentChatId})}else{
            navigate("/chat")
        }
        

    } catch (error) {
        
    }
}





    return(
     <div className="main-container">
            <Sidebar chats={pastChats} getFunction={getChatHistory}/>
            <div className="content-container">
              <Header />
              <ChatWindow messages={messages} />
              <MessageInput handleSend={handleSend} /> {/* 🔹 Fix applied here */}
            </div>
          </div>
    )
}