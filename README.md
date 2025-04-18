###  Student API Endpoints

####  GET  
`http://localhost:3000/student/getall`  
Fetch all students.

---

####  POST  
`http://localhost:3000/student/createStudent`  
Create a student.  
**Body Parameters:**
- `name`: string
- `rollNo`: number

---

#### DELETE  
`http://localhost:3000/student/deleteStudent/:id`  
Delete a student by ID.  
**Path Parameter:**
- `id`: string

---

####  PUT  
`http://localhost:3000/student/updateStudent/:id`  
Update a student by ID.  
**Path Parameter:**
- `id`: string  
**Body Parameters :**
- `name`: string
- `rollNo`: number
