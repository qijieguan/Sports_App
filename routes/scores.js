const router = require('express').Router();
const axios = require('axios');

const options = (method, url, params, headers) => {
    return {
      method: method,
      url: url,
      params: params,
      headers: headers
    }
};
  

router.route('/get-scores').post(async (req, res) => {
    try {
        const method = "GET"
        const url = 'https://tank01-fantasy-stats.p.rapidapi.com/getNBAScoresOnly';
        const params = {
            gameDate: req.body.date,
            topPerformers: 'true',
            lineups: 'true'
        }
        const headers = {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': process.env.FANTASY_API_HOST,
        }

        await axios.request(options(method, url, params, headers))
        .then((response) => { res.json(response.data); });
    }
    catch (error) {
        console.error(error);
    }
});

module.exports = router;
  