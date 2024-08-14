# Comment System

I have built a simple comment system using with React, allowing users to add, edit, delete, and reply to comments.

## Features

- Add new comments
- Edit existing comments
- Delete comments
- Reply to comments
- Nested comment structure

## Technologies Used

- JavaScript
- React
- npm

## Project Structure

src/
├── components/
│   ├── Comment.js
│   ├── CommentForm.js
│   ├── CommentList.js
│   └── CommentSection.js
├── store/
│   └── index.js
└── App.js


## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/comment-system.git
    cd comment-system
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- Add a new comment using the form at the top.
- Edit or delete existing comments using the respective buttons.
- Reply to a comment by clicking the "Reply" button.

## Components

### `CommentSection`

The main component that renders the comment form and the list of comments.

### `CommentForm`

A form component for adding new comments or replies.

### `CommentList`

A component that renders a list of comments, supporting nested replies.

### `Comment`

A component that represents a single comment, with options to edit, delete, and reply.

## State Management

In the project I have used a custom store for state management called zustand, located in `src/store.js`. The store handles the following actions:

- `addComment`: Adds a new comment to the state.
- `updateComment`: Updates an existing comment.
- `deleteComment`: Deletes a comment.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.
