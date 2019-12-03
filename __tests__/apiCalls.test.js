
// //none of this works and i have no idea why

// import {Cards} from './../src/cards.js';

// describe('Cards', () => {
//     let cards;
//     beforeEach(function() {
//         cards = new Cards();
//     });

//     test('should return 52 when a single deck is created', async () => {
//         let x = await cards.makeDecks(1);
//         await expect(cards.getRemaining(x)).resolves.toBe(52);
//     });

//     test('the data is peanut butter', async () => {
//         const remain = await cards.makeDecks(1);
//         const remaining = Promise.resolve(remain.remaining);
//         expect(remaining).toBe(52);
//       });

// });