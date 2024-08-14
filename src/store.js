// src/store.js
import create from 'zustand';

const useStore = create(set => ({
    comments: JSON.parse(localStorage.getItem('comments')) || [],
    addComment: (comment) => set(state => {
        const updatedComments = [...state.comments, comment];
        localStorage.setItem('comments', JSON.stringify(updatedComments));
        return { comments: updatedComments };
    }),
    updateComment: (id, updatedText) => set(state => {
        const updatedComments = state.comments.map(comment =>
            comment.id === id ? { ...comment, text: updatedText } : comment
        );
        localStorage.setItem('comments', JSON.stringify(updatedComments));
        return { comments: updatedComments };
    }),
    deleteComment: (id) => set(state => {
        const updatedComments = state.comments.filter(comment => comment.id !== id);
        localStorage.setItem('comments', JSON.stringify(updatedComments));
        return { comments: updatedComments };
    })
}));

export default useStore;
