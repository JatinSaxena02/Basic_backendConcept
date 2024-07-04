var arr = [1, 2, 3, 4];
const { error } = require("console");
// ForEach Method
// arr.forEach((val) => {
//   console.log(val + " hello");
// });

// --------------------------------- //

// Map Method
// var ans = arr.map((val) => {
//   return val;
// });
// console.log(ans);
// --------------------------------- //
// Filter method
// var ans = arr.filter((val) => {
//   if (val > 2) return true;
//   return false;
// });

// console.log(ans);
// -------------------------------- //

// indexOf method -- it returned the index of the give value, and if the value is present in the array then it return the index of that value otherwise it return -1.
// Note -- if your array contains duplicate values then it returned the value which is occurred first.
// it does not take any callback fn. like map,filter,forEach.

// var ans = arr.indexOf(4);
// console.log(ans);

// --------------------------------- //

// Objects in javascript

//  Objects in javascript is nothing but an unordered collection of related data , primitive data in the form of "key" and "value" pair.
// they can be accessed using dot notation.

// var obj = {
//   name: "jatin",
//   age: 22,
//   city: "bhopal",
//   info: () => {
//     console.log(
//       `My name is ${obj.name} and I'm ${obj.age} years old from ${obj.city}`
//     );
//   },
// };
// there are mainly two ways through which you can access the values of any key from an object.
// obj.info(); //1st way
// console.log(obj["name"]); // 2nd way

// --------------------------------- //

//  async function

// async function info() {
//   var blog = await fetch(`https://randomuser.me/api/`);
//   var ans = await blog.json();
//   console.log(ans.results[0]);
// }
// info();

// --------------------------------- //

// Fs(File system) module in nodejs
// it provide a wide range of functions.these functions allows you to perform various operations like writing to, reading from, renaming a file,unlinking a file.The asynchronous functions are generally preferred for I/O operations to avoid blocking the event loop, but synchronous functions are also available for simpler or one-off tasks.

// const fs = require("fs");
/* writeFile is used to write something in the file, actually it takes three arguments filename,data,callback */

// fs.writeFile("hay.txt", "Hello", (err) => {
//   if (err) console.log(err);
//   console.log("done");
// });

/* appendFile is used to write something more in the created file, and it takes three arguments filename,data,callback */

// fs.appendFile("hay.txt", "World", (err) => {
//   if (err) console.log(err);
//   console.log("done");
// });

/* rename is used to rename the old one with the new one, it takes three arguments oldname,newname,callback */

// fs.rename("hay.txt", "new.txt", (err) => {
//   if (err) console.log(err);
//   console.log("done");
// });

/* mainly copyFile is used to copy the file in another folder, it takes filename,folderpath/newname, callback */

// fs.copyFile("new.txt","./copy/copyFile.txt",(err)=>{
//     if(err) console.log(err);
//     console.log("done");
// })

/* unlink is used to remove a particular file from a directory. This function does'nt work on directory, inorder to delete directory we can use "rm" function. If their is a file inside a  folder then it does not delete the folder and throws an error as "Directory not empty". you can use rm with this option as an argument --> { recursive: true} to delete folder with a file.*/

// fs.unlink("new.txt", (err) => {
//   if (err) console.log(err);
//   console.log("done");
// });

// fs.rm("./copy", { recursive: true }, (err) => {
//   if (err) console.log(err);
//   console.log("done");
// });

/* inorder to create a  directory we can use mkdir function */

// fs.mkdir("./copy",(err)=>{
//     if(err) console.log(err);
//     console.log("done");
// })

// --------------------------------- //


// http module is the other way through which we can create server.
/*
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello world");
});
server.listen(3000);
*/
