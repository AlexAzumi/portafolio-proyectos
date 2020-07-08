import axios from 'axios';
// API URL
const API_URL = 'https://api.github.com/users/alexazumi/repos?sort=updated';

/**
 * Returns repositories
 * @param {import('next').NextApiRequest} request - NextJS request
 * @param {import('next').NextApiResponse} response - NextJS response
 */
export default async (request, response) => {
  try {
    // Get data
    const repositories = await axios.get(API_URL);
    // Return response
    response.statusCode = 200;
    response.json(repositories.data.filter(item => item.fork === false));
  } catch (error) {
    // Return error response
    response.statusCode = 500;
    response.json({ ...error });
  }
};
