const express = require('express');
const zod = require('zod');
const app = express();
const port = 4000
const schema = zod.array(zod.number());

app.use(express.json());

console.log(`listening on port ${port}`)

app.post('/', (req, res) => {
    const kidney = req.body.kidneyId;
    const response = schema.safeParse(kidney);
    if (!response.success) {
        res.status(411).json({
            response
        })
    }else{
        res.send({
            response
        })
    }
})

const schema2 = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
});

function validateInput(obj){
    return schema2.safeParse(obj);
}

app.post('/mail', (req, res) => {
    const response = validateInput(req.body)
    if (!response.success) {
        res.json({
            msg: "Your inputs are invalid"
        })
        console.log(response)
    }
    console.log(response)
    res.send({
        response
    });
})

app.listen(port);