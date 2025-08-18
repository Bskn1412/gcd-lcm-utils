# gcd-lcm-util

It's a tiny utility for calculating **GCD (Greatest Common Divisor)** and **LCM (Least Common Multiple)** of two numbers.  
Great for math-related projects or whenever you need number theory helpers.

---

## Installation

```bash
npm install gcd-lcm-utils
```

---

## Usage

```javascript
const find = require('gcd-lcm-utils');

//Example-1
console.log(find.gcd(12,6)); // Output: 6
console.log(find.lcm(12,6)); // Output: 12

//Example-2
console.log(find.gcd(15,20)); // Output: 5
console.log(find.lcm(15,0)); // Output: 0


---

## License

ISC
