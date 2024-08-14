// src/components/Comment.js
import React, { useState } from 'react';
import useStore from '../store';
import CommentForm from './commentForm';
import CommentList from './commentList';

const Comment = ({ comment }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isReplying, setIsReplying] = useState(false);
    const [text, setText] = useState(comment.text);
    const updateComment = useStore(state => state.updateComment);
    const deleteComment = useStore(state => state.deleteComment);

    const handleEdit = () => {
        if (isEditing) {
            updateComment(comment.id, text);
        }
        setIsEditing(!isEditing);
    };

    const handleDelete = () => {
        deleteComment(comment.id);
    };

    const handleReplyToggle = () => {
        setIsReplying(!isReplying);
    };

    return (
        <div className="comment">
            <div className="comment-header">
                <strong>{comment.name}</strong>
                <span>{new Date(comment.date).toLocaleString()}</span>
            </div>
            {isEditing ? (
                <textarea value={text} onChange={(e) => setText(e.target.value)} />
            ) : (
                <p>{comment.text}</p>
            )}
            <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleReplyToggle}>
                {isReplying ? "Cancel" : "Reply"}
            </button>

            {isReplying && (
                <CommentForm
                    parentId={comment.id}
                    onCancel={handleReplyToggle}
                />
            )}

            <CommentList parentId={comment.id} />
        </div>
    );
};

export default Comment;
