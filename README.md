Sure, here's a more concise and complete TypeScript cheat sheet in Markdown format, covering all major topics with brief explanations and short examples:

```markdown
# TypeScript Cheat Sheet

## Basic Types

```typescript
// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;

// String
let color: string = "blue";

// Array
let list: number[] = [1, 2, 3];

// Tuple
let x: [string, number] = ["hello", 10];

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string instead";

// Void
function warnUser(): void {
    console.log("This is my warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
    throw new Error(message);
}

// Object
let obj: object = { name: "John", age: 30 };
```

## Advanced Types

```typescript
// Union Types
let path: string | string[];

// Type Aliases
type Point = { x: number, y: number };
let p: Point = { x: 10, y: 20 };

// Intersection Types
interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}
type ColorfulCircle = Colorful & Circle;
let cc: ColorfulCircle = { color: "red", radius: 42 };

// Interfaces
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

// Generics
function identity<T>(arg: T): T {
    return arg;
}
let output = identity<string>("myString");
```

## Functions

```typescript
// Optional Parameters
function buildName(firstName: string, lastName?: string) {
    return lastName ? `${firstName} ${lastName}` : firstName;
}

// Default Parameters
function calculate(price: number, discount: number = 0.1) {
    return price - (price * discount);
}

// Rest Parameters
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

// Function Types
let myAdd: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y;
};
```

## Classes

```typescript
// Class Basics
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}

// Inheritance
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

// Modifiers
class Animal {
    private name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

// Readonly Modifier
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string) {
        this.name = theName;
    }
}
```

## TypeScript Specific Features

```typescript
// Type Assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// Namespaces
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}

// Modules
// StringValidator.ts
export interface StringValidator {
    isAcceptable(s: string): boolean;
}

// LettersOnlyValidator.ts
import { StringValidator } from "./StringValidator";
export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return /^[A-Za-z]+$/.test(s);
    }
}

// main.ts
import { StringValidator } from "./StringValidator";
import { LettersOnlyValidator } from "./LettersOnlyValidator";

let strings = ["Hello", "98052", "101"];
let validator: StringValidator = new LettersOnlyValidator();

strings.forEach(s => {
    console.log(`"${s}" - ${validator.isAcceptable(s) ? "matches" : "does not match"}`);
});

// Decorators
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}
```

## Interview Questions and Answers

1. **What is TypeScript and its advantages over JavaScript?**
   - **Answer**: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers static type-checking, improved code readability, and maintainability. TypeScript helps in catching errors during development and provides a better tooling experience with features like auto-completion, navigation, and refactoring.

2. **Explain the difference between `interface` and `type` in TypeScript.**
   - **Answer**: Both `interface` and `type` can be used to define the shape of an object. However, `interface` can be extended and implemented by classes, whereas `type` aliases are more flexible and can represent other types such as primitives, unions, and tuples. Use `interface` when defining an object's structure and `type` for more complex type definitions.

3. **What are generics in TypeScript? Provide an example.**
   - **Answer**: Generics allow you to create reusable components that can work with different types. They enable the creation of components that can handle any data type while maintaining type safety.
     ```typescript
     function identity<T>(arg: T): T {
         return arg;
     }
     let output = identity<string>("myString"); // Output type is string
     ```

4. **How does TypeScript support type annotations and type inference?**
   - **Answer**: Type annotations explicitly specify types for variables, function parameters, and return values. Type inference allows TypeScript to automatically determine types based on the context and initial values.
     ```typescript
     let x: number = 5; // Type annotation
     let y = "hello"; // Type inference
     ```

5. **What are union types and why are they useful?**
   - **Answer**: Union types allow a variable to hold multiple types. They are useful when a value can be of different types, providing flexibility while maintaining type safety.
     ```typescript
     let id: number | string;
     id = 101; // OK
     id = "E101"; // OK
     ```

6. **How do you handle asynchronous code in TypeScript?**
   - **Answer**: TypeScript supports asynchronous code using `async` and `await`, which work similarly to JavaScript. Promises and callbacks are also supported.
     ```typescript
     async function fetchData() {
         let response = await fetch('api/data');
         let data = await response.json();
         console.log(data);
     }
     ```

7. **Explain the concept of decorators and provide a practical example.**
   - **Answer**: Decorators are a special kind of declaration used to modify classes and class members. They are used for metaprogramming and adding annotations.
     ```typescript
     function readonly(target: any, key: string) {
         Object.defineProperty(target, key, {
             writable: false
         });
     }
     class Person {
         @readonly
         name: string;
         constructor(name: string) {
             this.name = name;
         }
     }
     ```
```

This cheat sheet covers all major TypeScript concepts, provides concise examples, and includes key interview questions and answers for quick reference. You can copy and paste this into a `.md` file for your use.