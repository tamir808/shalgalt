for (let i = 1; i <= 100; i++) {
  if (i % 3) {
    console.log("Fuzz");
  } else if (i % 5) {
    console.log("Bizz");
  } else if (i % 5 && i % 3) {
    console.log("FuzzBizz");
  }
}

function niilber(a, b, c, d, e) {
  return a + b + c + d + e;
}
console.log(1, 2, 3, 4, 5);

let a = [1, 3, 5];
let b = [2, 4, 6];
let mergearray = a.concat(b);
mergearray.sort((x, y) => x - y);

console.log(mergearray);
