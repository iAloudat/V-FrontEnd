function profit(prices) {
/* Setting the bestProfitSoFar to a negative infinity. */
  let bestProfitSoFar = -Infinity
/* Setting the lowest price so far to the first element in the array. */
  let lowestPriceSoFar = prices[0]

  for (let i = 1; i < prices.length; i++) {
 /* Setting the purchase price to the lowest price so far. */
    const purchase = lowestPriceSoFar
/* Setting the sale price to the current element in the array. */
    const sale = prices[i]
 /* Finding the profit by subtracting the purchase price from the sale price. */
    const profit = sale - purchase



/* Finding the lowest price so far. */
    lowestPriceSoFar = Math.min(lowestPriceSoFar, sale)
 /* Finding the best profit so far. */
    bestProfitSoFar = Math.max(bestProfitSoFar, profit)
  }

  if (bestProfitSoFar <= 0) {
    // Not buying the product because the price keeps on going down
    return 0;
}
/* Returning the best profit so far. */
return bestProfitSoFar;

}
console.log(profit([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(profit([15, 10, 9, 6, 4, 3, 1]));
console.log(profit([15, 11, 12, 11, 10, 7, 13]));


