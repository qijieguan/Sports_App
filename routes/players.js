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
  

router.route('/get-players').post(async (req, res) => {
    try {
        const team_id = req.body.team_id;

        const method = "GET"
        const url = 'https://sportscore1.p.rapidapi.com/teams/18792/players';
        const params = {page: '1', id: team_id}
        const headers = {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': process.env.SPORTS_API_HOST,
        }
   
        await axios.request(options(method, url, params, headers))
        .then((response) => { res.json(response.data); });
    }
    catch (error) {
        console.error(error);
    }
});

module.exports = router;
  