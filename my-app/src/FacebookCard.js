
import React from 'react';
import './FacebookCard.css';

const FacebookCard = ({ user, time, imageUrl, postText }) => {
  return (
    <div className="facebook-card">
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

export default FacebookCard;
