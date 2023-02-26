const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

const url = 'https://www.cefconnect.com/fund/USA'

PORT = 8000

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)
        const articles = []

        $('').each(function() {
        const title = $(this).text()
        const url = $(this).find('a').attr('href')
        articles.push({
            title,
            url
        })
    })
    console.log(articles)
    }).catch(err => console.log(err))

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


