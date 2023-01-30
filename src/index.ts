import express from 'express';
//import axios from 'axios';
export const App = express();

App.use(express.json());

App.get('/entities/:entity', (_req, res) => {
    // const BankName = req.params.entity;

    // const State = await axios.get(`/entities/histories/last/${BankName}`);
    const State: number = Math.floor(Math.random() * 3);
    
    // return res.status;
    console.log(State);
    if (State == 1){
        return res.status(200).send('owo');
    } else if (State == 2) {
        return res.status(504).send('owo');
    }
    return res.status(400).send('owo');
});

const Port = process.env.PORT || 4000;

export const Server = App.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
})