
import React from 'react';
import './App.css';
import FacebookCard from './FacebookCard';
import userIcon from './img/user.png';
import river from './img/SwatRiver.jpg';
import tour from './img/tourism.jpg';
import nature from './img/lake.jpg';
import bike from './img/harley.jpg';


function App() {
  const user = {
    name: 'Arsalan Ahmed',
    avatarUrl: userIcon, 
  };

  return (
    <div className="">
      <FacebookCard
        user={user}
        time="10 hr"
        imageUrl={river}
        postText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, perferendis. Quia ullam labore nam, in quae similique facilis, accusamus, corrupti cumque placeat quo quidem ipsam quos fuga deleniti sunt assumenda."
      />
      <FacebookCard
        user={user}
        time="10 hr"
        imageUrl={bike}
        postText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, perferendis. Quia ullam labore nam, in quae similique facilis, accusamus, corrupti cumque placeat quo quidem ipsam quos fuga deleniti sunt assumenda."
      />
      <FacebookCard
        user={user}
        time="15 hr"
        imageUrl={nature}
        postText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, perferendis. Quia ullam labore nam, in quae similique facilis, accusamus, corrupti cumque placeat quo quidem ipsam quos fuga deleniti sunt assumenda."
      />
      <FacebookCard
        user={user}
        time="14 hr"
        imageUrl={tour}
        postText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, perferendis. Quia ullam labore nam, in quae similique facilis, accusamus, corrupti cumque placeat quo quidem ipsam quos fuga deleniti sunt assumenda."
      />
    </div>
  );
}

export default App;
