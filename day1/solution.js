const arr = fetch("https://adventofcode.com/2021/day/1/input")
  .then((data) => data.text())
  .then((nums) => nums.split("\n"))
  .then((strings) => strings.map((str) => parseInt(str, 10)))
  .then((digits) =>
    digits.filter((num, idx, arr) => {
      return arr[idx] < arr[++idx];
    })
  )
  .then((result) => console.log(result.length));
