
import React from 'react';
import './card.css';

const card = ({ user, time, imageUrl, postText }) => {
  return (
    <div className="post-card">
      <div className="user-info">
        <img src={user.avatarUrl} alt={user.name} className="user-avatar" />
        <div className="user-details">
          <h2>{user.name}</h2>
          <p>{time}</p>
        </div>
      </div>
      <p className="post-text">{postText}</p>
      <img src={imageUrl} alt="Post" className="post-image" />
      <div className="post-actions">
        <button className="action-button">Like</button>
        <button className="action-button">Comment</button>
        <button className="action-button">Share</button>
      </div>
    </div>
  );
};

export default card;


