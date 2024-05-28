import Chatbot from "../Chatbot";

import styles from '../../styles/chat.module.css';


export default function Chat() {
    return (
        <div className={styles.container}>
            <Chatbot />
        </div>
    );
}