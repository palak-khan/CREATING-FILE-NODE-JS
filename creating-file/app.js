// CRUD
const fs = require("fs");
//1. CREATE

fs.writeFile("hello.txt", "HELLO WORLD!", (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("file created successfully.")
    }
});

//2. READ
//3. UPDATE
//4 DELETE
