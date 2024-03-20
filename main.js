//DAY 18
var smartphone = {
    make: "iPhone",
    model: "xmax",
    specs: {
        storage: "128GB",
        screenSize: "6.2 inches",
        batteryLife: " 6 hours"
    }
};
console.log(smartphone);
var programmerSkills = {
    languages: ["Typescript", "Pythone", "Html"],
    tools: ["VS code", "Git", "Docker"],
    frameWork: ["React", "Node.js", "Spring Boot"]
};
var languages = programmerSkills.languages, tools = programmerSkills.tools, frameWork = programmerSkills.frameWork;
console.log("Language: ".concat(languages[0], ", Framework: ").concat(frameWork[0], ", Tool: ").concat(tools[0]));
console.log("Language: ".concat(languages[2], ", Framework: ").concat(frameWork[1], ", Tool: ").concat(tools[2]));
// A way to make a flexible list
function createObjectWithDynamicKey(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var userPreference = createObjectWithDynamicKey("theme", "dark");
console.log(userPreference);
//DAY 19
var numbers = [1, 2, 3, 4, 5];
var doubleNumber = numbers.map(function (number) { return number * 2; });
console.log(doubleNumber);
var mixedArrays = ["Book", 8, "Pen", 9, 4, "Food"];
var stringArray = mixedArrays.filter(function (item) { return typeof item === "string"; });
console.log(stringArray);
var grades = [95, 96, 72, 79, 83, 67];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrade);
