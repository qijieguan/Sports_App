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
  

router.route('/get-teams').post(async (req, res) => {
    try {
        const method = "GET"
        const url = 'https://tank01-fantasy-stats.p.rapidapi.com/getNBATeams';
        const params = {
            schedules: 'true',
            rosters: 'true',
            topPerformers: 'true',
            teamStats: 'true',
            statsToGet: 'averages'
        }
        const headers = {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': process.env.TEAMS_API_HOST,
        }

        await axios.request(options(method, url, params, headers))
        .then((response) => { res.json(response.data); });
    }
    catch (error) {
        console.error(error);
    }
});

module.exports = router;
  