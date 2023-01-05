class Twitter {
    lastIndex: number;
    userTweets: Map<number,number[]>;
    userFollowing: Map<number,number[]>;

    constructor() {
      this.userTweets = new Map();
      this.userFollowing = new Map();
      this.lastIndex = 1;
    }

    postTweet(userId: number, tweetId: number): void {
      let tweets:any = this.userTweets.get(userId);
      if (!tweets) {
          tweets = [];
          this.userTweets.set(userId, tweets);
      }
      tweets.unshift({ id: tweetId, index: this.lastIndex });
      this.lastIndex = this.lastIndex + 1;
    }

    getNewsFeed(userId: number): number[] {
      const followings = this.userFollowing.get(userId);
      let tweets = (this.userTweets.get(userId) || []).slice(0, 10);

      followings &&
          followings.forEach(uid => {
              if (uid === userId) return
        
              const userTweets = this.userTweets.get(uid);
              if (userTweets) {
                tweets = tweets.concat(userTweets);
              }
          });

      return tweets
          .sort((a: any, b: any) => b.index - a.index)
          .map((tweet: any) => tweet.id)
          .slice(0, 10);
    }

    follow(followerId: number, followeeId: number): void {
      let followings:any = this.userFollowing.get(followerId);
      if (!followings) {
          followings = new Set();
          this.userFollowing.set(followerId, followings);
      }
      followings.add(followeeId);
    }

    unfollow(followerId: number, followeeId: number): void {
      const followings:any = this.userFollowing.get(followerId);
      followings && followings.delete(followeeId);
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
