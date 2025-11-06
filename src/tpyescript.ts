// Type Annotation

// let name = "John";

let fullName: string = "john";

let isActive: boolean = true;

let age: number = 20;

let pupilName: string[] = [];

// Tuple
let pupName: [string, number] = ["John", 30];

// Interface
interface objTypes {
  name: string;
  age: number;
  gender: string;
}

let obj: objTypes = {
  name: "John",
  age: 22,
  gender: "Male",
};
// Type
type dataTypes = {
  name: string;
  age: number;
  gender: string;
};

let data: dataTypes = {
  name: "John",
  age: 22,
  gender: "Male",
};

function sum(a: number, b: number): number {
  return a + b;
}

//Creating your own custome Type
type GENDER = "Male" | "Female";

const gender: GENDER = "Male";
