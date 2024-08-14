import React, { useState } from 'react';
import useStore from '../store';

const CommentForm = ({ parentId = null }) => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const addComment = useStore(state => state.addComment);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !text) return alert("Please enter name and comment");

        const newComment = {
            id: Date.now(),
            name,
            text,
            date: new Date().toISOString(),
            parentId,
        };
        addComment(newComment);
        setName('');
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                placeholder="Your Comment"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Comment</button>
        </form>
    );
};

export default CommentForm;
