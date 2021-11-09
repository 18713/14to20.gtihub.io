// 1. Declare an empty array using JS literal notation to store
// student names in future.
var aar =[];

// 2. Declare an empty array using JS object notation to store
// student names in future.

var object1 = new object();

// Declare and initialize a strings array.

var arr1 = ["hello"];
alert(arr1)

// 4. Declare and initialize a numbers array.

 var arr2 = [2];
 alert(arr2)

// 5. Declare and initialize a boolean array.

var arr3 = [true];
alert(arr3)

// 6. Declare and initialize a mixed array.

var mixArr = ["abdullah" , 1 , true]
alert(mixArr)

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var name = ["Qualification"+"<br>"];
var list =["1"+")"+ "SSC"+"<br>"+ "2"+")"+ "HSC"+"<br>" +"3"+")"+ "BCS"+"<br>"+ "4"+")"+ "BS"+"<br>"+ "5"+")"+ "BCOM"+"<br>" +"6"+")"+ "MS"+"<br>"+ "7"+")"+ "M.PHIL"+"<br>" +"8"+")"+ "PHD"]
document.write(name,list)


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var arr = [
             ["idress","abdullah","shafiq"+"<br>"],
             ["idress percentage is"+" " + 302*100/500+"<br>"+"abdullah percentage is"+" " + 360*100/500+"<br>" +"shafiq percentage is" +" " +280*100/500]

]
document.write(arr[0],arr[1]),arr[2]


// 9. Initialize an array with color names. Display the array
// elements in your browser.

var arr = ["black","yellow","green","purple","white","brown"]

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.


arr.unshift("grey");
document.write(arr);



// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

var arr = ["black","yellow","green","purple","white","brown"]

arr.push("grey");
document.write(arr)

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

 var arr = ["black","yellow","green","purple","white","brown"]
 arr.unshift("orange","ash white");
 document.write(arr)

// d. Delete the first color in the array. Display the updated
// array in your browser.

var arr = ["black","yellow","green","purple","white","brown"]
arr.shift()
document.write(arr)

// e. Delete the last color in the array. Display the updated
// array in your browser

var arr = ["black","yellow","green","purple","white","brown"]
arr.pop();
document.write(arr)

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
var arr = ["black","yellow","green","purple","white","brown"]
arr.splice(2,0,"ash white","light")
document.write(arr)

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var arr = ["black","yellow","green","purple","white","brown"]

arr.splice(2,2);
document.write(arr)

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
var student = ["scores of student"+" "]
var score = [320,230,480,120]
score.sort()
document.write(student, score)


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var cities = ["karachi","lahore","peshawar","islamabad","quetta"]
var number = cities.slice(1,4)
document.write(number)

// 2. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This ", " is "," my "," cat"]
var b = arr.join(" ");
document.write(b)

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var devices = ["keyboard","mouse","printer","monitor"]
devices.sort();
document.write(devices)

// assignment number # 17 and 20

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var arr =[[]];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:


var arr = [          
    [ 0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]
document.write(arr[0]+"<br>")
document.write(arr[1]+"<br>")
document.write(arr[2])

// 3. Write a program to print numeric counting from 1 to 10

for(var a= 1; a < 11 ; a++ ){
    document.write(a +"<br>")
}


// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
 var tableNum = +prompt("Enter Table Number")
 var tableLength = +prompt("Enter Table Length")

 for(var i = 1 ; i <=tableLength ; i++){

         document.write( tableNum +" x " + i + "=" 
                          + tableNum*i + "<br>")

 }

// 5. Write a program to print items of the following array
// using for loop:
var fruits = ["apple", "banana", "mango", "orange","strawberry"]
document.write(fruits[0] +"<br>")
document.write(fruits[1] +"<br>")
document.write(fruits[2] +"<br>")
document.write(fruits[3] +"<br>")
document.write(fruits[4] )