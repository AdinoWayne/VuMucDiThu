function filterRestaurants(restaurants: number[][], veganFriendly: number, maxPrice: number, maxDistance: number): number[] {

    // If veganFriendly is true, we do care about the restaurant's vegan-friendliness
    // This is a pattern of 'if p then q' in boolean algebra which is equivalent to 'not p or q'
    const filteredRestaurants = restaurants.filter(([id, rating, vegan, price, distance]) => 
        (!veganFriendly || vegan) && price <= maxPrice && distance <= maxDistance
    )
    
    // Note that we're sorting from highest to lowest hence b - a instead of a - b
    
    filteredRestaurants.sort((a, b) => {
        const [aId, aRating]  = a
        const [bId, bRating] = b
        
        return aRating !== bRating ? bRating - aRating : bId - aId
    })
    
    return filteredRestaurants.map(([id]) => id)
};
// TC O(nlogn)
// SC O(n)
