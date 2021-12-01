const arr = fetch("https://adventofcode.com/2021/day/1/input")
  .then((data) => data.text())
  .then((nums) => nums.split("\n"))
  .then((nums) => nums.filter((digit) => digit.codePointAt() !== undefined))
  .then((digits) =>
    digits.filter((num, idx, arr) => {
      return arr[idx] < arr[++idx];
    })
  )
  .then((result) => console.log(result.length));
