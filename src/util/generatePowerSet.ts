/**
 * Recursive function to generate all permutations of states for the parameters
 * in this query, that is, a QueryParameters object for every unique set of boolean
 * states for the given variables list.
 *
 * Caution: This function runs exponentially relative to the number of variables and
 * is memory intensive!
 */
function generatePowerSet<T>(
  items: T[],
  powerSet: T[][],
  currentSubset: T[] = [],
  itemIndex: number = 0
) {
  if (itemIndex === items.length) {
    // We've made a decision for each item in the list.
    powerSet.push(currentSubset);
    return;
  }

  // Recursively generate all possible subsets that include and don't include this variable.
  // Creates new lists bc of mutability.
  const includes: T[] = [...currentSubset, items[itemIndex]];
  generatePowerSet(items, powerSet, includes, itemIndex + 1);

  const excludes: T[] = [...currentSubset];
  generatePowerSet(items, powerSet, excludes, itemIndex + 1);
}

export default generatePowerSet;
