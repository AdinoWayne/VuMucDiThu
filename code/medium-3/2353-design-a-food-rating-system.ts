type FoodObj = {food: string, rating: number}
type CuisineObj = {cuisine: string, rating: number}
type PQ = {
    enqueue: (obj: FoodObj) => void, 
    dequeue: () => void, 
    front: () => FoodObj
}

class FoodRatings {
    foodMap: Map<string, CuisineObj>
    cuisineMap: Map<string, PQ>
    constructor(foods: string[], cuisines: string[], ratings: number[]) {
        const n = foods.length
        this.foodMap = new Map()
        this.cuisineMap = new Map()
        for (let i = 0; i < n; i++) {
            this.foodMap.set(foods[i], { cuisine: cuisines[i], rating: ratings[i] })
            if (!this.cuisineMap.has(cuisines[i])) {
                const pq = new MaxPriorityQueue({
                    compare: (a: FoodObj, b: FoodObj) => {
                        return a.rating !== b.rating ? b.rating - a.rating :
                            a.food.localeCompare(b.food)
                    }
                })
                this.cuisineMap.set(cuisines[i], pq)
            }
            this.cuisineMap.get(cuisines[i]).enqueue({food: foods[i], rating: ratings[i]})
        }
    }

    changeRating(food: string, newRating: number): void {
        const cuisine = this.foodMap.get(food).cuisine
        this.cuisineMap.get(cuisine).enqueue({food, rating: newRating})
        this.foodMap.set(food, { cuisine, rating: newRating})
    }

    highestRated(cuisine: string): string {
        const pq = this.cuisineMap.get(cuisine)
        while (this.foodMap.get(pq.front().food).rating !== pq.front().rating) {
            pq.dequeue()
        }
        return pq.front().food
    }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
