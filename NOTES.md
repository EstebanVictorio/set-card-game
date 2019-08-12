# Notes

## Solving the game challenges

### How to check if the selected cards form a set?

The fastest way that came to mind for me was to analyze an array with different  
words which would help me identify a card,
like:

```js
["red", "diamond", "stripes", "three"][("green", "oval", "solid", "two")];
```

And then, I would compare each position to see if this comparison would
comply with the rules.  
After a few minutes of thinking it, I thought:

"There should be another way to do this, a faster one".

I think it's a rather low-quality and non-perfomant way to do this.

I researched about the game and found out that there are ways to find out
the amount of dealt cards on the board that could lead to no sets at all.

In between the research, I came across this mathematical concept called  
"Modular arithmetic".

This type of arithmetics allows you too "start over" a count.

In a more elaborated way, this is explained by the "mod" operator, which is the
remainder of a division:

```js
0 % 3 // = 0
1 % 3 // = 1
2 % 3 // = 2
3 % 3 // = 0
4 % 3 // = 1
5 % 3 // = 2
6 % 3 // = 0
.
.
.
// and so on...
```

So, you would go in a "circular way" when counting further from one number before
the chosen divisor of the operation, starting all over again from 0.

So, the game is played with this logic, because, the rules state that, for a given
set to be counted valid as a set, has to go comply the following conditions:

- A set is only formed by three cards.
- A set is only considered a set if it's either completely equal or  
  completely different on any of its features (color, shape, shade, number).

So, to check, with numbers, in a faster way, how does a group of objects  
representing the cards can form a set?

The solution is to sum up the three numbers of the feature of three selected cards  
and check if the result of the sum `%` 3 results in a zero.

To visualize this, you can imagine the following selected set:

- "0122"
- "0221"
- "1321"

So, for the first feature (let's say color), is the first position of all of  
the strings. Then, the operation would be:

- 1st: 0 + 0 + 1 = 1
- 2nd: 1 `%` 3 = 1

Given the result, and according to modular arithmetics, that feature does not  
comply with the rules. Let's say that:

- 0 is "red"
- 1 is "purple"
- 2 is "green"

Then, again:

- "0122" red for this
- "0221" red for this, too
- "1321" purple for this one

Given the selected cards above, that selected set does not comply with the rules, because it has two "reds" but one "purple", being neither completely equal or completely different. Now, let's find out if it had any other features  
that could've saved the set if this comparison had it right:

- "0122" Color: 0, Shape: 1, Shade: 2, Number: 2
- "0221" Color: 0, Shape: 2, Shade: 2, Number: 1
- "1321" Color: 1, Shape: 3, Shade: 2, Number: 1

On Shape: 1 + 2 + 3 = 6, 6 `%` 3 = 0, All different  
On Shade: 2 + 2 + 2 = 6, 6 `%` 3 = 0, All equal  
On Number: 2 + 1 + 1 = 4, 4 `%` 3 = 1, Neither fully equal or fully different

### How to check the remaining possible sets in the game?

The algorithm used is based on heuristics. It checks every set of cards and,
according to the modular arithmetic algorithm, it should run many comparisons,
but the arithmetics make it easy for the valid remaining sets.

### How to implement the deck?

Instead of using a normal approach, using an array of strings that each might
represent, combined with `unshift` to draw cards, I tried to do something more
complex. Why? Just for fun. :-)

I created a generator that would receive an array of strings on base3
representation, from 0 to 80, and pad the beginning of the strings with 0s.

### Most difficult challenges?

- The notification animation: Consisent updates to showing the right
  notification given the case was close to a very hard task, accounting that
  there were no animation libraries.

- Comprehending the math behind the game. Using it is way more performant
  thatn trying to use words in a string to represent the cards, so instead,
  numbers were used.
