import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import styles from '../styles/chatbot.module.css';

const faqs = [
    {
        question: 'Just saying hi :)',
        answer: 'Hi, Thank you for taking the time to view my portfolio!'
    },
    {
        question: 'How can I contact you?',
        answer: 'You can contact me at my email: caitlinba27@gmail.com!',
    },
    // {
    //     question: 'What tech stack do you use?',
    //     answer: 'I am currently using JavaScript, Next.js, Firebase, and GraphQL!'
    // },
];

type Faq = {
    question: string;
    answer: string;
};

type Chat = {
    message: string;
    type: 'bot' | 'user';
};

export default function Chatbot() {
    const [conversation, setConversation] = useState<Chat[]>([
        { message: 'Hi!', type: 'bot' },
        { message: 'What would you like to know?', type: 'bot' }
    ]);
    const [clickedQuestions, setClickedQuestions] = useState<Set<string>>(new Set());

    const handleQuestionClick = (faq: Faq) => {
        if (clickedQuestions.has(faq.question)) return;

        setConversation((prev) => [
            ...prev,
            { message: faq.question, type: 'user' },
            { message: faq.answer, type: 'bot' }
        ]);

        setClickedQuestions((prev) => {
            const newSet = new Set(prev);
            newSet.add(faq.question);
            return newSet;
        });
    };

    useEffect(() => {
        const chatContainer = document.querySelector(`.${styles.chatContainer}`);
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [conversation]);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>FAQ Chat Bot</h1>
            </div>

            <div className={styles.chatContainer}>
                <AnimatePresence>
                    {conversation.map((chat, index) => (
                        <motion.div
                            key={index}
                            className={chat.type === 'bot' ? styles.botMessage : styles.userMessage}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                        >
                            <p className={styles.message}>{chat.message}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>

                <div className={styles.options}>
                    {faqs.map((faq, index) => (
                        <p
                            key={index}
                            className={`${styles.question} ${clickedQuestions.has(faq.question) ? styles.disabledQuestion : ''}`}
                            onClick={() => handleQuestionClick(faq)}
                        >
                            {faq.question}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};