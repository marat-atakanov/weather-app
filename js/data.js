const baseApi = "https://api.openweathermap.org/data/2.5/"


export const fetchCityWeatherData = async (city) => {
  try {
    const resp = await fetch(
      `${baseApi}weather?q=${city.toLowerCase()}&units=metric&lang=en&appid=5a66bf1c19fe24223d418a534734a2cc`
    );
    const data = await resp.json();
    return data;
  } catch (e) {
    throw new Error(e); 
  }
};
