// src/components/CommentList.js
import React from 'react';
import Comment from './comment';
import useStore from '../store';

const CommentList = ({ parentId = null }) => {
    const comments = useStore(state => state.comments);

    return (
        <div className="comment-list">
            {comments
                .filter(comment => comment.parentId === parentId)
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map(comment => (
                    <div key={comment.id}>
                        <Comment comment={comment} />
                        <CommentList parentId={comment.id} />
                    </div>
                ))}
        </div>
    );
};

export default CommentList;
