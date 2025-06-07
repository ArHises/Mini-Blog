import { useState } from "react";
import { useUser } from "../contexts/UserContext";

import "./Comments.css";

export default function Comments() {
    const { user, setUser } = useUser();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState(
        localStorage.getItem("comments")
            ? JSON.parse(localStorage.getItem("comments"))
            : []
    );

    const handleCommentChange = (value) => {
        setComment(value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim() === "") return;

        const newComment = {
            userName: user.userName,
            text: comment,
            date: new Date().toLocaleString(),
        };

        const updatedComments = [newComment, ...comments];
        setComments(updatedComments);
        setComment("");

        localStorage.setItem("comments", JSON.stringify(updatedComments));
    };

    return (
        <div className="comments-container">
            <div className="comments-form">
                <h1>Comments</h1>
                <p>This is where the comments will be displayed.</p>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleCommentSubmit(e);
                    }}>
                    <p>from: {user.userName}</p>
                    <div className="comment-input">
                        <textarea
                            name="comment"
                            onChange={(e) =>
                                handleCommentChange(e.target.value)
                            }
                            value={comment}
                            placeholder="leave your comment here..."
                            minLength={1}
                            maxLength={200}
                            required
                            rows={2}
                        />
                        <button type="submit" title="Send">
                            Send
                        </button>
                    </div>
                </form>
            </div>
            <div>
                {comments.length > 0 ? (
                    <ul className="comments-list">
                        {comments.map((c, index) => (
                            <li key={index}>
                                <strong>{c.userName}</strong>
                                <span className="comment-date">
                                    ({c.date}) :{" "}
                                </span>
                                <p>{c.text}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No comments yet.</p>
                )}
            </div>
        </div>
    );
}
