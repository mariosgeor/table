const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = `https://api.the-odds-api.com/v4/sports/soccer_epl/odds/?apiKey=${apiKey}&regions=eu`;

export const fetchData = async (setData) => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    if (data) {
      setData(data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};