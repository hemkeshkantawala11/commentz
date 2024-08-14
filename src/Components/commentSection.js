// src/components/CommentSection.js
import React from 'react';
import CommentForm from './commentForm';
import CommentList from './commentList';

const CommentSection = () => {
    return (
        <div className="comment-section">
            <h2>Comments</h2>
            <CommentForm />
            <CommentList />
        </div>
    );
};

export default CommentSection;
