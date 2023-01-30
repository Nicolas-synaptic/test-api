import supertest from 'supertest';
import { App, Server } from '../src/index';

const Api = supertest(App);

describe('Test for the function in index.js', () =>{
    test('index is receiving data from the data base', async () => {
    })
})