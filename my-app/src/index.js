import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

function Card(props) {
  return (
    <div className="facebookCard">
      <div className="cardHeader">
        <img className="profileImg" src={props.profileImgUrl} alt="profileImage" />
        <div className="userInfo">
          <h3>{props.name}</h3>
          <span className="postDate">{props.postDate}</span>
        </div>
      </div>
      <p>{props.text}</p>
      <img
        className="postImage"
        src={props.imgUrl}
        alt="Post"
        width="500"
        height="300"
      />

      <div className="postButtons">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
}

const postsData = [
  {
    postDate: "25 August 2023",
    profileImgUrl: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    imgUrl: "https://move2turkey.com/wp-content/uploads/2021/06/Temple-of-Artemis-in-Turkey-One-of-the-seven-wonders-of-the-ancient-world3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto natus corrupti perspiciatis totam! Cumque ab eum sunt error vero, recusandae doloribus, delectus dignissimos nobis molestias ex nihil officia assumenda maiores.",
    name: "Ahmed",
  },
  {
    postDate: "15 March 2023",
    profileImgUrl: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    imgUrl: "https://nomadparadise.com/wp-content/uploads/2021/04/pakistan-places-07.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto natus corrupti perspiciatis totam! Cumque ab eum sunt error vero, recusandae doloribus, delectus dignissimos nobis molestias ex nihil officia assumenda maiores.",
    name: "Arsalan",
  },
  {
    postDate: "30 December 2022",
    profileImgUrl: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    imgUrl: "https://www.forbesindia.com/media/images/2023/May/img_207569_thomasedison.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto natus corrupti perspiciatis totam! Cumque ab eum sunt error vero, recusandae doloribus, delectus dignissimos nobis molestias ex nihil officia assumenda maiores.",
    name: "Dave",
  }, 
  {
    postDate: "31 July 2022",
    profileImgUrl: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    imgUrl: "https://images.unsplash.com/photo-1570294646112-27ce4f174e38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFtYm9yZ2hpbml8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto natus corrupti perspiciatis totam! Cumque ab eum sunt error vero, recusandae doloribus, delectus dignissimos nobis molestias ex nihil officia assumenda maiores.",
    name: "John",
  },
];

ReactDOM.render(
  <div>
    {postsData.map((post, index) => (
      <Card
        key={index}
        postDate={post.postDate}
        profileImgUrl={post.profileImgUrl}
        imgUrl={post.imgUrl}
        text={post.text}
        name={post.name}
      />
    ))}
  </div>,
  document.querySelector("#root")
);