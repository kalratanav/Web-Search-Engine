const axios = require('axios');
const cheerio = require('cheerio');
const url = "https://en.wikipedia.org/wiki/Philosophy";
let html;
let articles, path, page = [];
fetchData(url).then( (res) => {
    html = res.data();
    console.log(html);
    const $ = cheerio.load(html);
    const statsTable = $('.table.table-bordered.table-hover.downloads > tbody > tr');
    statsTable.each(function() {
        let title = $(this).find('td').text();
        console.log(title);
    });
})

async function fetchData(url){
    console.log("Crawling data...")
    // make http call to url
    let response = await axios(url).catch((err) => console.log(err));

    if(response.status !== 200 || response.status !== 201 || response.status !== 202 || response.status !== 203 || response.status !== 204 || response.status !== 205 || response.status !== 206 || response.status !== 207 || response.status !== 208 || response.status !== 226){
        console.log("Error occurred while fetching data");
        return;
    }
    return response;
}