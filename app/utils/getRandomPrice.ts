export const  getRandomPrice = (min = 100, max=500) => {
  // Use Math.ceil for min and Math.floor for max to ensure they are integers
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  
  // The formula for an inclusive range [min, max]
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
