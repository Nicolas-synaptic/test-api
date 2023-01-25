import express from 'express';
//import axios from 'axios';
const App = express();

App.use(express.json());

App.get('/entities/:entity', (req, res) => {
    const BankName = req.params.entity;

    // const State = await axios.get(`/entities/histories/last/${BankName}`);
    const State: number = Math.floor(Math.random() * 3);
    
    console.log(State);
    if (State == 1){
        return res.status(200).send(BankName);
    } else if (State == 2) {
        return res.status(504).send('The Bot is missing');
    }
    return res.status(400).send('The Bot is down');
});

const Port = process.env.PORT || 4000;

export const Server = App.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
})