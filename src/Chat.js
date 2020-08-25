import React, {useEffect, useState} from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, InsertEmoticon, MicOutlined } from '@material-ui/icons'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Chat.css'

function Chat() {
    const [seed, setSeed] = useState('')
    const [input, setInput] = useState('')
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 1000))
    }, [])

    const sendMessage = (e) => {
        e.preventDefault()
        alert(input)
        setInput('')
    }

    return (
        <div className="chat">
            <div className="chat__header">
            <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="chat__headerInfo">
                <h3>Room name</h3>
                <p>Last seen at ...</p>
            </div>
            <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && 'chat__reciever'}`}>
                    <span className="chat__name">rahul</span>
                    Hey
                    <span className="chat__timestamp">3.25 pm</span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">rahul</span>
                    Hey
                    <span className="chat__timestamp">3.25 pm</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)}  placeholder="Type a message" />
                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
                <MicOutlined />
            </div>
        </div>
    )
}

export default Chat
