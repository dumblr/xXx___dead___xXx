const fileContents = (linkStr, linkDescStr, postIdStr) => `{
    "postId": "${postIdStr}",
    "titleContent": "${linkStr}",
    "textContent": "${linkDescStr}",
    "createdAt": "${Date.now()}"
}`;

export default fileContents;
