## Table of Contents

### Types
- Number
- String
- Boolean
- Null
- Undefined
- Void
- Object
- Array
- Tuples
- ...
- **Any** - If we are using `any` in our code, we are intentionally making our code more vulnerable.
- **Never**
- **Unknown**

### Situations
- A function accepts 2 numbers
- A function returns a string

### Syntax
- `let variableName:type = value`
- All types are lower case.
- value is optional
- `02_variablesMe.ts`
  
  ![alt text](images/image-8.png)
  
- In the terminal `tsc 02_variablesMe.ts`
- `02_variablesMe.js` is created.
  
  ![alt text](images/image-9.png)

- But again, when we go back to out .ts file. We will have a red line.
  
  ![alt text](images/image-10.png)

- Temporary fix for this error.
- Add `export {}` at the end of the .ts file.
- No red line.
  
  ![alt text](images/image-11.png)

### How this type helps us to write better code
- **In Javascript**
  
  ![alt text](images/image-12.png)

- In this code we have created a variable and assigned a string value to it and then we assigned an integer to it. There is no error shown.
- And when we run it, it even runs without any problem.
  
  ![alt text](images/image-13.png)

- **In Typescript**
  
  ![alt text](images/image-14.png)

- It shows us red line and gives us error.
  
  ![alt text](images/image-15.png)