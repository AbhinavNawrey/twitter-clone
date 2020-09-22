import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
    return (
     <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar src="https://scontent.frpr1-1.fna.fbcdn.net/v/t1.0-9/15672680_1238232396260957_4311100090664086466_n.jpg?_nc_cat=102&_nc_sid=174925&_nc_ohc=WYFZgMUWSqMAX8e_BMX&_nc_ht=scontent.frpr1-1.fna&oh=9a69ac62b5f3938d1d3d9d3d950e9434&oe=5F88DAEC"/>
                <input placeholder="Whats happening?" type="text"></input>
                
                 <input className="tweetBox__imageInput" Placeholder="Optional: Enter image URL"type="text"></input>    
            
             </div>
           <Button className="tweetbox__tweetButton">Tweet</Button>
         </form>     
    </div>
    );
}

export default TweetBox;
