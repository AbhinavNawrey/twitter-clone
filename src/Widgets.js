import React from "react";
import "./Widgets.css";
import {
 TwitterTimeLineEmbed, 
 TwitterShareButton,
 TwitterTweetEmbed,
} from "react-twitter-embed";

import SearchIcon from "@material-ui/icons/Search";zoom

function Widgets() {
    return (
        <div className="widgets"> 
          <div className="widgets__input">
            <SearchIcon className="widgets__searchIcon" />
            <input placeholder="Search Twitter" type="text" />
          </div> 

          <div className="widgets__widgetsContainer">
            <h2>What's Happening</h2>
            <h2>how are you</h2>
             
            <TwitterTweetEmbed tweetId={"858551177860055040"} />

            <TwitterTweetEmbed 
              sourceType="profile"
              screenName="cleverqazi"
              options={{height: 400 }}
            />

            <TwitterShareButton
             url={"https://www.facebook.com/abhinav.nawrey"}
            options={{ text : "#reactsjs is awesome", via: "abhinav.nawrey" }}
            
            />
             

          </div>
        </div>
    );
}

export default Widgets;
