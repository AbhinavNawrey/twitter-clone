import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";   

function Feed() {
    return (
        <div className="feed">
            { /* Header */ }
            <div className="feed__header">
                 <h2>Home</h2>
                 <h3>Home Coming</h3>
            </div>     
            { /* TweetBox */ }
             <TweetBox />
           

            { /* Post  */ }
              <Post />
              <Post />
            { /* Post  */ }
            { /* Post  */ }
            { /* Post  */ }
            { /* Post  */ }
            { /* Post  */ }
        </div>
    )
}

export default Feed;
