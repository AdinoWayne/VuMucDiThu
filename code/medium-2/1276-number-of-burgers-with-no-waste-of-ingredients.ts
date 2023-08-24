function numOfBurgers(tomatoSlices: number, cheeseSlices: number): number[] {
    if (cheeseSlices * 2 > tomatoSlices) return [];
    if (tomatoSlices % 2 === 1) return [];
    if (tomatoSlices === 0 && cheeseSlices === 0) return [0, 0];

    const maxSmallBurger = tomatoSlices / 2;
    const jumboBurger = maxSmallBurger - cheeseSlices;
    const smallBurger = maxSmallBurger - jumboBurger * 2;

    return smallBurger >= 0 ? [jumboBurger, smallBurger] : [];
};
// 4 * Jumbo Burger + 2 * Small Burger = tomatoSlices
// Jumbo Burger + Small Burger = cheeseSlices

// -> 4x + 2y = tomatoSlices
// x + y = cheeseSlices

// -> x = (tomatoSlices - 2 * cheeseSlices) / 2
// y = cheeseSlices - x

// TC O(1)
// SC O(1)
