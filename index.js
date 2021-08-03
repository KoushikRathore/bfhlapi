const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

app.post('/bfhl', (req, res) => {
    let arrOfNumber = req.body.numbers;
    let odd=[];
    let even=[];
    let is_success=true;
    
    for(var i in arrOfNumber){
        let num = Number(arrOfNumber[i])
        if(isNaN(num)){
            is_success=false;
        }
        else if(arrOfNumber[i] %2===0){
            even.push(num);
        }
        else{
            odd.push(num);
        }
    }
    if(is_success){
        let a = {
            "is_success":true,
            "user_id":"john_doe_17091999",
            "odd":odd,
            "even":even
        }
        res.send(a); 
    }
    else{
        let a = {
            "is_success":false,
            "user_id":"john_doe_17091999",
        }
        res.send(a); 
    }
   
})
app.get("*", (req, res) => { 
    return res.status(404).send("Error 404 Page Not found. Are you lost ? "); 
 }); 
 
app.listen(port, () => {
})
