const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const customers = [];

/**
 * CPF - string
 * NAME - string
 * ID - uuid
 * STATEMENT - []
 */
app.post('/account', (req, res) => {
  const { cpf, name } = req.body;

  const customerlreadyExists = customers.some((customer) => customer.cpf === cpf);

  if(customerlreadyExists) {
    return res.status(400).json({ error: 'Consumer already exists!' });
  }

  customers.push({ id: uuidv4(), name, cpf, statement: [] });

  return res.status(201).send();
})

app.get('/statement', (req, res) => {
  const { cpf } = req.headers;

  const customerStatement = customers.find((customer) => customer.cpf === cpf);

  if(!customerStatement) return res.status(400).json({ error: 'Customer not found' });

  return res.status(200).json(customerStatement);
});

app.listen(3001, () => {
  console.log('Servidor rodando...');
});