const profileContents = userData => `{
  "avatar": "${userData.avatar}",
  "bio": "${userData.bio}",
  "name": "${userData.name}",
  "follows": ${JSON.stringify(userData.follows)}
}`;

export default profileContents;
