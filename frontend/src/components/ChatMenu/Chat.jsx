import React, { useEffect, useState } from "react";
import s from './Chat.module.css';
import data from "../../data.json"

// Компонент для отображения отдельного сообщения
const ChatMessage = ({ message }) => {
    return (
      <div style={{ 
        border: '1px solid #ddd', 
        padding: '5px', 
        margin: '5px 0', 
        color: 'white',
        borderRadius: '5px',
        }}>
        {message}
      </div>
    );
  };

const Chat = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     fetch('http://localhost:8080/users', {
    //         // headers: {
    //         //     accept: 'application/json',
    //         //     'User-agent': 'learning app',
    //         // },
    //         headers: {
    //             'Content-Type': 'application.json',
    //             'Accept': 'application.json'
    //         }
    //     })
    //     .then(function(response){ 
    //         console.log(response)
    //         response.json();
    //     })
    //     .then(function(data){
    //         console.log(data)
    //         setUsers(data);
    //     })
    //     .catch(error => console.error('Error fetching users: ', error));
    // }, []);

    // useEffect(() => {
    //     setLoading(true);

    //     fetch('http://localhost:8080/users', {
    //         headers: {
    //             'Content-Type': 'application.json',
    //             'Accept': 'application.json'
    // }})
    //       .then(response => response.json())
    //       .then(data => {
    //         setUsers(data);
    //         setLoading(false);
    //       })
    //   }, []);

    // useEffect(() => {
    //     setLoading(true);

    //     fetch('http://localhost:8080/users', {
    //         method: 'get',
    //         dataType: 'json',
    //         headers: {
    //             'Content-Type': 'application.json',
    //             'Accept': 'application.json'
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(responseData => console.log(responseData))
    //     .catch(error => console.error('Error fetching users: ', error));
    // }, []);

    // if (loading) {
    //     return <p>Loading...</p>;
    // }

    // Состояние для списка сообщений
    const [messages, setMessages] = useState([]);

    // Состояние для ввода нового сообщения
    const [newMessage, setNewMessage] = useState('');

    // Обработка отправки нового сообщения
    const handleSend = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, newMessage]);
            setNewMessage(''); // Очистка ввода после отправки
        }
    };

    return (
        // <div className={s.chat_content}>
        //     <div>
        //         <h2>Users</h2>
        //         <ul>
        //             {data.map(user => (
        //                 <li key={user.id}>{user.nickname}</li>
        //             ))}
        //         </ul>
        //     </div>
        // </div>

        <div style={{ padding: '10px', width: '300px' }}>
            {/* Отображение сообщений */}
            <div
                style={{
                    maxHeight: '150px',
                    overflowY: 'auto',
                    padding: '5px',
                    marginBottom: '10px',
                }}
            >
                {messages.map((message, index) => (
                    <ChatMessage key={index} message={message} />
                ))}
            </div>

            {/* Поле ввода нового сообщения */}
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type text"
                style={{ width: '200px', padding: '5px' }}
            />

            {/* Кнопка отправки */}
            <button onClick={handleSend} style={{ padding: '5px 10px', 
            marginLeft: '10px', 
            color: 'white',
            backgroundColor: '#494949' }}>
                Send
            </button>
            <br />
        </div>
    );
}

export default Chat;