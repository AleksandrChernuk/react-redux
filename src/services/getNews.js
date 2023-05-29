const API_KEY = "962146b9d25d436e840d97bd2da5a358";
const BASEE_URL = "https://newsapi.org/v2";

//

export const getSearchNews = async (seacrhText) => {
  const data = await fetch(`${BASEE_URL}/everything?q=${seacrhText}`, { headers: { "X-Api-Key": API_KEY } });

  return await data.json();
};

export const getTopNews = async () => {
  const data = await fetch(`${BASEE_URL}/top-headlines?country=ua`, { headers: { "X-Api-Key": API_KEY } });

  return await data.json();
};
