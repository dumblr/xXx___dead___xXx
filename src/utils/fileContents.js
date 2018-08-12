const fileContents = (
  postTitle,
  postText,
  postImage,
  postIdStr,
  postType,
  postAuthor
) => `{
  "postId": "${postIdStr}",
  "titleContent": "${postTitle}",
  "textContent": ${postText},
  "imageSource": "${postImage}",
  "createdAt": "${new Date()}",
  "postType": "${postType}",
  "postAuthor": "${postAuthor}"
}`;

export default fileContents;
