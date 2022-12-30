import { Octokit } from 'octokit';

export default async (req, res) => {
  try {
    const { url, ...params } = req.query;
    const octokit = new Octokit({
      auth: `${process.env.GH_TOKEN}`,
    });

    const data = await octokit.request(`GET ${url}`, {
      ...params,
    });
    console.log(
      `Success! Status: ${data.status}. Rate limit remaining: ${data.headers['x-ratelimit-remaining']}`,
    );

    res.status(200).json(data);
  } catch (err) {
    throw err;
  }
};
