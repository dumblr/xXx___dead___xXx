const fileContents = (postTitle, postText, postIdStr, postType) => `{
  "postId": "${postIdStr}",
  "titleContent": "${postTitle}",
  "textContent": "${postText}",
  "createdAt": ${Date.now()},
  "postType": "${postType}"
}`;

export default fileContents;

//--- Future additions/modifications
// "textContent": [...postText],
// "imageContent": "${postImage}",
