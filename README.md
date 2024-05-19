<h2>Core Concepts:</h2>
<br>
Moduler Pattern

- In this project we implemented the "Moduler Pattern" software design.Each entity (student,teacher) has their own modules. Each
  modules contain:
  - Interface.ts
  - Routes.ts
  - Model.ts
  - Controller.ts
  - Service.ts

We followed the given pattern:
-Create interface
-Create schema of the entity using mongoose
-Create the Model

Request-Response Flow of Moduler pattern:
<img src="https://i.ibb.co/NWfQbPW/Modular-Pattern-Data-flow.png" alt="Modular-Pattern-Data-flow" border="0">
[Client]--->[Route.ts]--->[Controller.ts]<-----(request,response)----->[Service.ts]<----(request,response)---->[Database]

after getting a response from Service,Controller sends data to Client

[Controller.ts]---(response)--->[Client]

Mongoose Built-in Methods
-studentsModel.create() //built-in static method
-const student = new StudentsModel() ; student.save() //built-in intance method

Mongoos Middleware:

- They are also called 'Mongoose Hooks'
  - 3 types:
  - Document Middleware
  - Query Middleware
  - Aggregation Middleware
  - Implement at 'schema.ts'

Note: We save passwords as "Hash/Hexadecimal/Encrypted" password in DB. Not in plain text. Here we utilzed 'bycrypt' for that.
--> npm i -D @types/bcrypt

<h2>External Packeges:</h2>
Validation:
<ul>
  <li>NPM Validator: JS --> npm i validator | TS--->npm i @types/validator </li>
  <li>JOI Validator: JS --> npm i joi (implemented at 'controller' file) </li>
  
</ul>
