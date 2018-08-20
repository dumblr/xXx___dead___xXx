import urlEnv from './urlEnv';

const archive = new global.DatArchive(urlEnv());

export const queryFollowers = async () => {
  // 1. get following list
  const userData = await archive.readFile(`profile.json`);
  const followingArray = JSON.parse(userData).follows;
  // 2. map following users
  console.log('followingArray', followingArray);
  if (followingArray.length > 0) {
    followingArray.map(async follow => {
      await queryFollowerPosts(follow);
    });
  }
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
