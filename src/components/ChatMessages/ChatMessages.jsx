import s from './chatMessages.module.scss'

const ChatMessages = ({ id ,messages }) => {
    console.log(messages)
    return <div className={s.container}>
        <ul className={s.list}>
            {messages.map(msg => <li className={id === msg.from? s.self : s.item} key={msg._id}><p>{msg.message}</p></li>)}
        </ul>
    </div>
};


export default ChatMessages;