const fileContents = (postTitle, postText, postIdStr, postType) => `{
  "postId": "${postIdStr}",
  "titleContent": "${postTitle}",
  "textContent": ${postText},
  "createdAt": "${new Date()}",
  "postType": "${postType}"
}`;

export default fileContents;

//--- Future additions/modifications
// "textContent": [...postText],
// "imageContent": "${postImage}",
