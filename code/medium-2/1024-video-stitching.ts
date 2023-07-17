function videoStitching(clips: number[][], time: number): number {
    const n = clips.length;
    
    clips.sort((a, b) => a[0] - b[0]);
    
    let stitching_start = 0;
    let stitching_end = 0;
    let videos_used = 0;
    let index = 0;
    
    while (stitching_start < time) {
        while (index < n && clips[index][0] <= stitching_start) { // find the longest video that starts before our stitching_start
            stitching_end = Math.max(stitching_end, clips[index][1]);
            index++;
        }
        if (stitching_start == stitching_end) return -1; // made no advancement
        
        videos_used++;
        stitching_start = stitching_end;
    }
    
    return videos_used;
};
// TC O(n)
// SC O(1)
