const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const fs = require('fs')
const controller = require('./server/controller');
const { default: mongoose } = require('mongoose');

app.use(express.json());
const mongoURI = 'mongodb+srv://katya:thispasswordKV@solodb.q3lhzfc.mongodb.net/?retryWrites=true&w=majority';
app.use(express.static(path.resolve(__dirname, './dist')))

mongoose.connect(mongoURI);

//making a new ticket
app.post('/tickets', controller.addTicket, (req, res) => {
    return res.status(200).json(res.locals.newTicket);
});

//viewing all tickets
app.get('/tickets', controller.showTickets, (req, res) => {
   return res.status(200).json(res.locals.allTickets);
});

app.patch('/tickets/:name', controller.grabTicket, (req, res) => {
    return res.status(200).send('thanks for helping');
})

// app.get('/style.css', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '/style.css'))
// })



app.use('/', (req, res) => {
    return res.send('the server works!!')
})

//unknown path handler
app.use('*', (req, res) => {
    return res.status(404).send('404 page does not exist');
  });


//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});