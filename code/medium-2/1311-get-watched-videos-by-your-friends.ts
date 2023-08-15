function watchedVideosByFriends(watchedVideos: string[][], friends: number[][], id: number, level: number): string[] {
    const visited = new Set([id]);
    const queue = [id];

    while (queue.length && level > 0) {
        const size = queue.length;

        for (let index = 0; index < size; index++) {
            const id = queue.shift();
            const friend = friends[id];

            friend.forEach(friendId => {
                if (visited.has(friendId)) return;
                queue.push(friendId);
                visited.add(friendId);
            });
        }
        level -= 1;
    }
    const videosMap = queue.reduce((map, id) => {
        const videos = watchedVideos[id];

        videos.forEach(video => {
            const count = map.get(video) ?? 0;
            map.set(video, count + 1);
        });
        return map;
    }, new Map());
    const videos = [...videosMap.entries()].sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]));

    return videos.map(([video]) => video);
};
