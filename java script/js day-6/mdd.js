//string methods
// split
let sentence="I am a comma separated sentance";
console.log(sentence.length);
let words=sentence.split("a");
console.log(words);

// q.1 count the number of occurrences of 'r' in the given string.
let str = "tu meri ma tera tu meri me tera";
let count = str.split("r").length - 1;
console.log(count); // output: 4
 

function text () {
    console.log(" text")
    return function text2() {
        console.log("text2");
        return function text3() {
            console.log("text3");
        }
    }
}
 text()()()
// let value = text();
// value()()
// value()()()

//annonymous function
map = function() {
    console.log("map function");
}

// self invoking function
(function() {
    console.log("demo");
})()
console.log(a) //cant access a

(function(){
    let a=10;
    b=a;
    console.log(a)
})()
console.log(b) //can access a a variable after assignment