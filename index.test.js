const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');

// describe('Social Sequelzie Test', () => {
//     /**
//      * Runs the code prior to all tests
//      */
//     beforeAll(async () => {
//         // the 'sync' method will create tables based on the model class
//         // by setting 'force:true' the tables are recreated each time the test suite is run
//         await sequelize.sync({ force: true });
//     })

//     // Write your tests here
    
//     test("replace with your test", function() {
//         expect(true).toBe(true);
//     })




// })

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.close();
});

describe('User model', () => {
  test('Can create a user', async () => {
    const user = await User.create({
      username: 'testuser',
      email: 'testuser@test.com',
    });
    expect(user.id).toBeTruthy();
    expect(user.username).toBe('testuser');
    expect(user.email).toBe('testuser@test.com');
  });

  test('User can have a profile', async () => {
    const user = await User.create({
      username: 'testuser',
      email: 'testuser@test.com',
    });
    const profile = await user.createProfile({
      bio: 'This is a test bio',
      profilePicture: 'https://example.com/test.jpg',
      birthday: '2000-01-01',
    });
    expect(profile.id).toBeTruthy();
    expect(profile.UserId).toBe(user.id);
    expect(profile.bio).toBe('This is a test bio');
    expect(profile.profilePicture).toBe('https://example.com/test.jpg');
    expect(profile.birthday).toBe('2000-01-01');
  });

  test('User can create a post', async () => {
    const user = await User.create({
      username: 'testuser',
      email: 'testuser@test.com',
    });
    const post = await user.createPost({
      title: 'Test Post',
      body: 'This is a test post body',
    });
    expect(post.id).toBeTruthy();
    expect(post.UserId).toBe(user.id);
    expect(post.title).toBe('Test Post');
    expect(post.body).toBe('This is a test post body');
  });

  test('User can like a post', async () => {
    const user = await User.create({
      username: 'testuser',
      email: 'testuser@test.com',
    });
    const post = await user.createPost({
      title: 'Test Post',
      body: 'This is a test post body',
    });
    const like = await user.createLike({
      reactionType: 'like',
      PostId: post.id,
    });
    expect(like.id).toBeTruthy();
    expect(like.UserId).toBe(user.id);
    expect(like.PostId).toBe(post.id);
    expect(like.reactionType).toBe('like');
  });
});

describe('Post model', () => {
  test('Can create a post', async () => {
    const post = await Post.create({
      title: 'Test Post',
      body: 'This is a test post body',
    });
    expect(post.id).toBeTruthy();
    expect(post.title).toBe('Test Post');
    expect(post.body).toBe('This is a test post body');
  });

  test('Post can have comments', async () => {
    const post = await Post.create({
      title: 'Test Post',
      body: 'This is a test post body',
    });
    const comment = await post.createComment({
      body: 'This is a test comment',
    });
    expect(comment.id).toBeTruthy();
    expect(comment.PostId).toBe(post.id);
    expect(comment.body).toBe('This is a test comment');
  });

  test('Post can be liked by a user', async () => {
    const user = await User.create({
      username: 'testuser',
      email: 'testuser@test.com',
    })
  })
})
