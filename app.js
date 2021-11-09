// // Addition
// // let numOne = 12;
// // let numTwo = 14;
// // let numThree = 15;
// // let numFour = 16;

// // let addition = (numOne + numTwo + numThree + numFour)
// // console.log(addition)

// // // subtraction
// // let subtraction = (numTwo - numThree)
// // console.log(subtraction)

// // // Multiplication
// // let Multiplication = (numOne * numFour)
// // console.log(Multiplication)

// // // Division

// // let Division = (numThree / numOne)
// // console.log(Division)

// // // Remainder
// // let Remainder = (numOne % numFour)
// // console.log(Remainder)


// //Strings

// // let myName = "My name is GuL Muhammad";
// // let myNameU=myName.toUpperCase()
// // console.log(myNameU)
// // let myNameS=myName.toLowerCase()
// // console.log(myNameS)
// // let nameStyle=myName.replace("My name is","Me")
// // console.log(nameStyle)


// // let myAddress = "I am from Shishkat Gojal Hunza";
// // let myAddressA=myAddress.toUpperCase()
// // console.log(myAddressA)
// // let myAddressL=myAddress.toLowerCase()
// // console.log(myAddressL)
// // let newAddress=myAddress.replace("I am from", "My village name is")
// // console.log(newAddress)


// // let education = "I am student of Karakurum International University";
// // let educationE=education.toUpperCase()
// // console.log(educationE)
// // let educationL=education.toLowerCase()
// // console.log(educationL)
// // let newEducation=education.replace("I am", "Gul Muhammad is a")
// // console.log(newEducation)


// // let proffession = "I am a Student";
// // let proffessionP=proffession.toUpperCase()
// // console.log(proffessionP)
// // let proffessionL=proffession.toLowerCase()
// // console.log(proffessionL)
// // let newProffesion=proffession.replace("student","Bussinessman")
// // console.log(newProffesion)


// // let myAge = "I am 22 years old";
// // let myAgeA=myAge.toUpperCase()
// // console.log(myAgeA)
// // let myAgeL=myAge.toLowerCase()
// // console.log(myAgeL)
// // let currentAge=myAge.replace("22", "23")
// // console.log(currentAge)



// // // Trim
// // let myName ="   Gul Muhammad     ";
// // console.log(myName)
// // let trimName = myName.trim()
// // console.log(trimName)

// // let array = ["gilgit",24,true]
// // console.log(array)


// // String prototype.at()
// let details = "I am a student of Karakurum International University.";
// let pick = 8;
// console.log(`Pick the alphbat at ${pick} which is ${details.at(pick)}`);

// let pickTwo = -15;
// console.log(`Pick the alphabat at ${pickTwo} which is ${details.at(pickTwo)}`)

// // String prototype.CharAt()
// let sentence = "Pakistan is a peacefull country.";
// let number = 20;
// console.log(`Pick the alphabat at ${number}, which is ${sentence.at(number)}`)

// let sentenceTwo = "Pakistan is a peacefull country.";
// let numberC = -2;
// console.log(`pick ${numberC}, Alphabat is ${sentenceTwo.at(numberC)}`)

// // string prototype.concat()
// let firstName = "Gul";
// let lastName = "Muhammad";
// console.log(firstName.concat(' ', lastName));

// let word = "Hello";
// let secWord = "Jeenab";
// console.log(word.concat(' ', secWord))

// // string prototype.endsWith()
// let string = "Mind your language";
// console.log(string.endsWith('language',18));

// let stringTwo = "Is there any "


// let myDetails = [{ 
//      firstName: "Gul Muhammad",
//      lastName: "Barcha",
//      age: 22,
//      Address: "Hunza Gojal",
// },
// {
//     profession:"Student",
//     institude:"KIU",
//     year:2020,
// }]
// let newDetails = myDetails[0].Address;
// console.log(newDetails)

// let oldDetails = myDetails[1].year;
// console.log(oldDetails)


// let newArray = ["Gilgit", 1947, true, undefined]
// let lastArray = newArray[1];
// console.log(lastArray)
// // console.log(newArray)

// let array = [
//     ["shishkat", 12 , true],
//     ["Place", 22 , undefined],
//     [50, "fifty-fifty", 121],
// ]
// console.log(array)
// let newArrayA = array[0][0]
// console.log(newArrayA)

//  let newArrayB = array[1][0]
//  console.log(newArrayB)

//  let newArrayC = array[2][0]
//  console.log(newArrayC)





// POP elements
// let newAray = [12, 13 , 14, 44];
// console.log(newAray .pop())

// console.log(newAray)

// let fruitNames = ["banana", "Apple", "Orange", "Peach"]
// console.log(fruitNames.pop())
// console.log(fruitNames)


// // Push elements
// let studentDetails = ["Name", "Age", "Subjects", "Class"]
// console.log(studentDetails.push("Gul Muhammad"))
// console.log(studentDetails)

// let country = ["Pakistan", "Dubia", "Russia", "India"]
// console.log(country.push("Idonesia"))
// console.log(country)


// // Shift Elements
// let numbers = [12, 34, 45, 6, 45];
// console.log(numbers.shift());
// console.log(numbers )

// let bikeModel = ["Model Name", "Model", "Price", "color"]
// console.log(bikeModel.shift())
// console.log(bikeModel)

// // Unshift elements

let myBiography = [];


let myDetails = {
    Name:"Gul Muhammad",
    Fname: "Darwesh Ali",
    Age: 21,
    Address:" Shishkat Gojal, Hunza",
    Matric: "Government boys high school Gulmit Gojal",
    Fsc: "Sedna School and degree college Aliabad HUnza",
}
let myProfession = {
    profression: "Student",
    institude:"Karakurum International university",
    year:" 2020 to 2024",
    department:"Computer Science",
    program: "BS(RS&GIS)",
    semester: 3,

}
let myHobbies = {
    hobbies: "Playing, reading, writing, drawing, and Driving.",
    work: "Programming",
    developer: "Front-End Developer",
}

myBiography.push(myDetails)
console.log(myBiography)

myBiography.push(myProfession)
console.log(myBiography)

myBiography.push(myHobbies)
console.log(myBiography)

console.log(myBiography)

let myBio = `My Name is ${myDetails.Name}. I am ${myDetails.Age} years old. My father name is ${myDetails.Fname}. My village name is ${myDetails.Address}. I have completed my matric from ${myDetails.Matric} and my FSC form ${myDetails.Fsc}. I am ${myProfession.profression} of ${myProfession.institude} for the year${myProfession.year}. My department is ${myProfession.department}, program ${myProfession.program}. i have many hoobies like ${myHobbies.hobbies}. I am also learning ${myHobbies.work} ${myHobbies.developer}. `;
console.log(myBio)
