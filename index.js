let number = 1;
let str = '1';
let bool = true;
let tryNull = null;
let nothing;
let bigNum = 51625874n;
let obj = {
    first: 1,
    second: 2
}
let trySymbol = Symbol('id')

// ....Приведём всех к числу....

console.log(Number(str))
console.log(Number(bool))
console.log(Number(tryNull))
console.log(Number(nothing))
console.log(Number(bigNum))
console.log(Number(obj))
// в случае с Symbol будет ошибка


// ....Приведём всех к строке....

console.log(String(number))
console.log(String(bool))
console.log(String(tryNull))
console.log(String(nothing))
console.log(String(bigNum))
console.log(String(obj))
console.log(String(trySymbol))

// ....Приведём всех к логическому типу....

console.log(Boolean(number))
console.log(Boolean(str))
console.log(Boolean(tryNull))
console.log(Boolean(nothing))
console.log(Boolean(bigNum))
console.log(Boolean(obj))