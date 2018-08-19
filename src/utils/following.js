import urlEnv from './urlEnv';

const archive = new global.DatArchive(urlEnv());

export const addFollower = async datUrl => {
  console.log(datUrl);
  /*---
  1. input dat URL into input field
  2. regex out dat://
  3. query for dat URL
  3a. return true or false message if valid dat URL
  4. write to following array in profile.json
  ---*/
};

export const queryFollowers = async () => {
  // 1. get following list
  const userData = await archive.readFile(`profile.json`);
  const followingArray = JSON.parse(userData).follows;
  // 2. map following users
  await followingArray.map(follow => {
    queryFollowerPosts(follow);
  });
};

const queryFollowerPosts = async follow => {
  let newArchive = new global.DatArchive(follow.url);
  // 3. query posts from following users
  let userArchive = await newArchive.readdir('/posts');
  if (userArchive.length > 0) {
    userArchive.map(async post => {
      let postResponse = await newArchive.readFile(`/posts/${post}`);
      let postId = await JSON.parse(postResponse).postId;
      // 4. check if post downloaded
      // TODO - File will overwrite at this point... won't want double query though

      // 5. put posts into theirposts folder
      await writePost(postResponse, postId);
    });
  }
};

const writePost = async (post, postId) => {
  await archive.writeFile(`/theirposts/${postId}.json`, post);
};
