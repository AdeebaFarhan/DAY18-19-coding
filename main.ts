//DAY 18

let smartphone = {
  make: "iPhone",
  model: "xmax",
  specs: {
    storage: "128GB",
    screenSize: "6.2 inches",
    batteryLife: " 6 hours",
  },
};

console.log(smartphone);

let programmerSkills = {
  languages: ["Typescript", "Pythone", "Html"],
  tools: ["VS code", "Git", "Docker"],
  frameWork: ["React", "Node.js", "Spring Boot"],
};
let { languages, tools, frameWork } = programmerSkills;

console.log(
  `Language: ${languages[0]}, Framework: ${frameWork[0]}, Tool: ${tools[0]}`
);
console.log(
  `Language: ${languages[2]}, Framework: ${frameWork[1]}, Tool: ${tools[2]}`
);

// A way to make a flexible list
function createObjectWithDynamicKey(key: string, value: string) {
  let dynamicObject = {};

  dynamicObject[key] = value;
  return dynamicObject;
}

let userPreference = createObjectWithDynamicKey("theme", "dark");

console.log(userPreference);

//DAY 19

let numbers = [1, 2, 3, 4, 5];

let doubleNumber = numbers.map((number) => number * 2);
console.log(doubleNumber);



let mixedArrays = ["Book", 8, "Pen", 9, 4, "Food"];

let stringArray = mixedArrays.filter((item) => typeof item === "string");

console.log(stringArray);



let grades = [95, 96, 72, 79, 83, 67];

let averageGrade =
  grades.reduce((total, grade) => total + grade, 0) / grades.length;

console.log(averageGrade);
