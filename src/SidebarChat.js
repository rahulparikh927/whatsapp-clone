import React, {useEffect, useState} from 'react'
import { Avatar } from "@material-ui/core"
import './SidebarChat.css'
import db from './firebase'
import { Link } from 'react-router-dom'

function SidebarChat({ addNewChat, id, name }) {
    const [seed, setSeed] = useState('')
    const [messages, setmessages] = useState("")
    useEffect(() => {
        if(id){
            db.collection('rooms')
                .doc(id)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => 
                    setmessages(snapshot.docs.map((doc) => doc.data()))
                )
        }
    }, [id])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 1000))
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");
        if(roomName){
            db.collection('rooms').add({
                name:roomName
            })
        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new chat</h2>
        </div>
    )
}

export default SidebarChat
