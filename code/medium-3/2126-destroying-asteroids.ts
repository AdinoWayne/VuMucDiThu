function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
    asteroids.sort(function(a, b){return a - b});
    for(let i=0;i<asteroids.length;i++)
        {
            if(asteroids[i]<=mass)
                {
                    mass+=asteroids[i];
                }
            else
                {
                    return false;
                }
        }
    return true;
};
