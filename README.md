# battleship

This was my first big project when it comes to learning unit testing with jest. The goal was to unit test each component of logic to be sure they were working independetly of each other. I had my modules and components mapped out quite efficiently so with mocks and isolated unit tests I was able to test individual bits of functionality without too much issue.

## What I learned

- How to test my game logic with jest, there were many situations where a piece of logic relied on another methods outcome to provide an accurate test. This was where using mock functions to emulate certain pieces of code came in really handy.

- I really pushed my code organisation and modularity during this project. I wanted to try my hardest to keep all different concerns in my codebase separated so that if I wanted to make changes at a later stage it wouldn't complicate the existing code. I ended up implmenting a type of MVC pattern.

## How I could improve moving forward

- Most of the unit testing I didn't have too much trouble with, but mocking functionality proved to be challenging at times. I still feel like I need to dive back into mocking to understand it better. 

- I do feel that sometimes I have too much duplicate code, while I tried my best to keep things as reusable as possible I think I took some liberties sometimes.