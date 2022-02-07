// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  const newArr = deck.map((item) => item * 2 )
  return newArr
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {

  return deck.reduce(
      (acc,elem) => {
        if (elem != '3') {
          acc.push(elem);
        } else {
          acc.push(3,3,3)
        }
        return acc;
      }, []
  )
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const spesificItemsIndex = deck.length / 2 - 1;
  const slicingItems = deck.slice(spesificItemsIndex, spesificItemsIndex + 2);
  return slicingItems
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const firstItem = deck.shift();
  const lastItem = deck.pop();
  const arrLength = deck.length / 2
  deck.splice(arrLength, 0, lastItem, firstItem);
  return deck
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  const specialNum = deck.filter((card) => card === 2)
  return specialNum
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  const sortedNum = deck.sort((a, b) => a - b)
  return sortedNum
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  const reverseOrder = deck.reverse();
  return reverseOrder
}
