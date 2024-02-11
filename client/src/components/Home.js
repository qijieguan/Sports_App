import axios from 'axios';
import { useEffect, useState } from 'react';

const baseURL = window.location.href.includes('localhost:3000') ? 'http://localhost:3001' : '';
//axios.post(baseURL + '/players/get-players/', {team_id });
