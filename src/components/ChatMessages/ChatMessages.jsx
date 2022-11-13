import s from './chatMessages.module.scss';
import { useEffect, useState, useRef } from 'react';

const ChatMessages = ({ id, messages }) => {
    const [dateList, setDateList] = useState([]);
    const scrollRef = useRef();
    const scrollFn = () =>{scrollRef.current?.scrollIntoView();}

      const dateSet = (msgs) => {
        const set = new Set();
        msgs.map((m) => { const date = new Date(m.createdAt).toLocaleDateString(); set.add(date)})
        setDateList(Array.from(set))
    };
    
     useEffect(() => {
    scrollFn()
     }, [messages, scrollFn]);
    
    useEffect(() => dateSet(messages), [messages])
    
  
   return <div className={s.container}>
       {dateList.map((date) => {
         return  <div  key={date} className={s.section_cont}>
               <p className={s.cont_date}>{date}</p>
            <ul className={s.list}>
            {messages.map((msg) => 
            {
                const msgDate = new Date(msg.createdAt).toLocaleDateString()
                if (date === msgDate) {
                const h = new Date(msg.createdAt).getHours().toString();
                const m = new Date(msg.createdAt).getMinutes().toString();
                const time = `${h.length > 1 ? h : `0${h}`}:${m.length > 1 ? m : `0${m}`}`;
                
                
                return (<li className={id === msg.from ? s.self : s.item} key={msg._id}>
                <p className={s.message}>{msg.message}</p>
                <span className={s.time}>{time}</span>
            </li>)
                }
                })}
        </ul></div>

       })}
       <button onClick={scrollFn} className={s.scrollBtn} type='button'>Down</button>
       <div ref={scrollRef}></div>
       
    </div>
};


export default ChatMessages;
