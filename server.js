const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement,quotesByperson } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

app.get('/api/quotes/random', (req, res, next) => {
    const quote = getRandomElement(quotes)
    res.send({
        quote: quote
    })
});

app.get('/api/quotes', (req, res, next) => {
    const person = req.query.person
    if (person){
        res.send({
            quotes: quotesByperson(quotes,person)
        })
    } else{
        res.send({
            quotes: quotes
        })
    }
});

app.post('/api/quotes', (req, res, next) => {
    const quote =  req.query.quote
    const person  = req.query.person

    if (quote && person) {
        quotes.push(req.query)
        res.send({
            quote: req.query
        })
    } else{
        res.status(400).send()
    }

});