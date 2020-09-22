import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/Favorite";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, userName, verified, text, image, avatar }) {

    
    return (
        <div className="post">
            <div className="post_avatar">
              <Avatar src="https://scontent.frpr1-1.fna.fbcdn.net/v/t1.0-9/15672680_1238232396260957_4311100090664086466_n.jpg?_nc_cat=102&_nc_sid=174925&_nc_ohc=WYFZgMUWSqMAX8e_BMX&_nc_ht=scontent.frpr1-1.fna&oh=9a69ac62b5f3938d1d3d9d3d950e9434&oe=5F88DAEC" />
            </div> 
            <div className="post__body"> 
              <div className="post__header">
                 <div className="post__headerText">
                    
                  <h3>
                   Abhinav Nawrey{" "} 
                    <span>
                        <VerifiedUserIcon className="post__badge" />
                    </span>
                  </h3>
                 </div>
                 <div className="post_headerDiscription">
                        <p>Lets build a demo using react JS</p>
                    </div>
              </div>
                 <img src="https://scontent.frpr1-1.fna.fbcdn.net/v/t1.0-9/936818_460828640668007_2035026240_n.jpg?_nc_cat=110&_nc_sid=2c4854&_nc_ohc=5ptFH_hWHEYAX9nOD3M&_nc_ht=scontent.frpr1-1.fna&oh=22db2a83459ba559e7173aaab4963c54&oe=5F87D649" alt=""/>   
              <div className="post__footer">
               <ChatBubbleOutlineIcon fontSize='Small' />
               <RepeatIcon fontSize='Small' />
               <FavoriteBorderIcon fontSize='Small' />
               <PublishIcon fontSize='Small' />

              </div>
            </div>                  
        </div>
    );    
}

export default Post;
