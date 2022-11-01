'use strict';

/**********SLICE METHOD************/
/*
একটা অ্যারেকে কোন জায়গা থেকে কতদুর পর্যন্ত
কাটা হবে,এটা কাজ করবে শুরু থেকে শেষ এর আগ পর্যন্ত এবং এটি ওরিজিনাল অ্যারের কোনো পরিবর্তন
করে না।
*/

const arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(1, 4));
console.log(arr.slice(1, -2));

/*একটা অ্যারেকে সম্পূর্ণ কপি করতে*/
const arrCopySystem1 = arr.slice();
const arrCopySystem2 = [...arr];

console.log(arrCopySystem2);

/*আরের লাস্ট এলিমেন্টকে বের করার জন্য*/

const arrLastElement1 = arr.slice(-1);/*অ্যারে রিটার্ন করে*/
const arrLastElement2 = arr[arr.length - 1];/*ভ্যালু রিটার্ন করে*/
const arrLastElement3 = arr.at(-1);/*ভ্যালু রিটার্ন করে*/

console.log(arrLastElement1);
console.log(arrLastElement2);
console.log(arrLastElement3);

/***********SPLICE METHOD*************/
/*
অ্যারের এলিমেন্টকে কেটে নিয়ে নতুন অ্যারে বানিয়ে ফেলে।আগের অ্যারেকে সম্পূর্ণ
পরিবর্তন করে ফেলে। পারামিটার(ইনডেক্স,কাটকৃত এলিমেন্টের সংখা)
 */
const arr2 = ['s', 'h', 'm', 'u', 's', 'u', 'f'];

let arrCutElement1 = arr2.splice(0, 3);
let arrCutElement2 = arr2.splice(1, 3);

console.log(arrCutElement1);
console.log(arrCutElement2);

/************REVERSE METHOD***************/
/*
অ্যারেকে রিভার্স করে এবং তাকে পরিবর্তনও করে ফেলবে।
*/
const arr3 = [2, 4, 6, 8, 10];
const reverseArr = arr3.reverse();/*অ্যারেকেই রিভার্স করেছে*/
console.log(reverseArr);
console.log(arr3);

/************CONCAT METHOD***************/
/*
দুটি অ্যারেকে যুক্ত করা।স্রেড অপারেটরের সাহায্যেও একাধিক অ্যারেকে যুক্ত করা যায়।
*/
const arr4 = [5, 10, 15, 20, 25];

const concatArr1 = arr3.concat(arr4);
const concatArr2 = [...arr3, ...arr4];

console.log(concatArr1);
console.log(concatArr2);

/*************JOIN METHOD*************/
/*
অ্যারের এলিমেন্টকে জয়েন করাবে। আগের অ্যারের কোনো পরিবর্তন না করেই।
*/
const words = ['This', 'is', 'a', 'nice', 'day'];
const joinWords1 = words.join(' '); /*ছেপারেটরের সাহায্যে ভ্যালুকে রিটার্ন করবে */
console.log(joinWords1);

const anotherWords = ['She', 'is', 'a', 'very', 'cute', 'girl'];
const joinWords2 = anotherWords.join(' ');

console.log(joinWords2);

/*
PUSH(শেষে এলিমেন্টকে অ্যাড করে),
UNSHIFT(শুরুতে এলিমেন্টকে অ্যাড করে),
POP(শেষ থেকে এলিমেন্টকে রিমুভ করে),
SHIFT(শুরু থেকে এলিমেন্টকে রিমুভ করে),
INCLUDE(কোনো ভ্যালু আছে কিনা সেটা চেক করে সত্য অথবা মিথ্যা রিটার্ন করে),
*/

/***********FOREACH METHOD*************/
/*
নতুন কোনো অ্যারে বানায় না বরং অ্যারের উপরে বিভিন্ন অপারেশন চালায়।
*/
const numberArr = [320, 255, 370, 335, 295, 280, 350, 345, 277];

numberArr.forEach((value, index, array) => {
  console.log(value);
})

numberArr.forEach((value, index, array) => {
  console.log(`${index + 1}: ${value}`);
})

const friends = ['Jony', 'Atik', 'Arif', 'Nafiul', 'Alia', 'Tozam'];
friends.forEach((friend, index) => {
  console.log(`${index + 1}: ${friend}`);
})
/*ForEach এর অসুবিধাঃ ব্রেক (break)এবং কনটিনিউ (continue) সাপোর্ট করে না।*/

/**********Map AND Set With forEach************/
/*
ম্যাপ(Map) এবং সেট হলো একধরনের ডাটা স্ট্রাকচার। সেট(Set) সব সময় ইউনিক ভ্যালু রিটার্ন করে থাকে। 
*/
const currencies = new Map([
  ["BDT", "Bangladeshi Taka"],
  ["USD", "United States Dollar"],
  ["EUR", "EURO"]
])

currencies.forEach((value, key, map) => {
  console.log(value);
  console.log(key);
})

const nam = new Map();
nam.set('fullName', 'Shm Rsuf');
nam.set('job', 'Student');
nam.set('cgpa', 3.25);

nam.forEach((value, key) => {
  console.log(`${key}: ${value}`);
})

console.log(nam.get('fullName'));
console.log(nam.has('gpa'));
console.log(nam.size);

const uniqueFrieds = new Set(['Atik', 'Jony', 'Arif', 'Nafiul', 'Kuddus', 'Nafiul', 'Arif', 'Jony']);
console.log(uniqueFrieds);

/*************ARRAY map METHOD*************/
/*
প্রতিটা এলিমেন্টের ভেতর দিয়ে যায় এবং এলিমেন্টকে পরিবর্তন করে নতুন একটা অ্যারে রিটার্ন করে কিন্তু আগের অ্যারের কোনো পরিবর্তন করে না।
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let newNubers = numbers.map((number, index, arr) => {
  return number * 2;
})

let addNumbers = numbers.map((num, index, arr) => {
  return num + 1.5;
})

console.log(newNubers);
console.log(addNumbers);

const fourRobbers = [15000, 25000, 12000, 14500];

const mainRobber = fourRobbers.map((money, index, arr) => {
  return money * 0.5;
})

console.log(mainRobber);

/***********ARRAY FILTER METHOD***********/
/*
প্রতিটা এলিমেন্টের ভেতর দিয়ে যায় এবং একটা নিদ্দিষ্ট সিদ্ধান্তের উপর ভিত্তি করে বিভিন্ন অপারেশন করে নতুন একটা অ্যারে রিটার্ন করে কিন্তু আগের অ্যারের কোনো পরিবর্তন করে না। 
*/

const transictions = [5000, -2000, 2600, -1200, 4200, -2400, 3600, -2250];

const deposit = transictions.filter((transiction, index, arr) => transiction > 0 ?? transiction);

const withdraw = transictions.filter((transiction, index, arr) => transiction < 0 ?? transiction);

console.log(deposit);
console.log(withdraw);

const numbers1 = [2, 4, 3, 5, 7, 10, 13, 16, 18, 21];

const even = numbers1.filter((num) => num % 2 === 0);

const odd = numbers1.filter((num) => num % 2 !== 0)

console.log(even);
console.log(odd);

const arrOfStr = ['Arif', 'Jony', 'Atik', 'Kuddus', 'Ashraful', 'Jubayer', 'Jannati', 'Aman', 'Noor'];

const nameA = arrOfStr.filter((nam) => nam.length === 4 && nam.startsWith('A'));
console.log(nameA);
