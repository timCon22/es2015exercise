import fruits from "./food";
import {choice, remove} from "./helpers";

let result = choice(fruits)

console.log(`I'd like one ${result}, please`)

console.log(`Here you go: ${result}`)

console.log('Delicious! May I have another?')

console.log(`I'm sorry, we're all out. We have 14 left.`)