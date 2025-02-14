const maxProfit = (prices) => {
    let minPrice = prices[0]; // Assume the first day is the cheapest to buy
    let maxProfit = 0; // Assume the maximum profit is 0

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];

        // Update minimum price if the lower price is found
        minPrice = Math.min(minPrice, currentPrice);

        const potentialPrice = currentPrice - minPrice;

        maxProfit = Math.max(maxProfit, potentialPrice);

        console.log(maxProfit)
    }
    return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices)
console.log("Maximum profit:", profit)