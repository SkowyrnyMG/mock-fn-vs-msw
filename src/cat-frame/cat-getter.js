import axios from 'axios';

export const CatGetter = async () => {
  
  try {
    const result = await axios
    .get('https://api.thecatapi.com/v1/images/search', { params: { limit: 1, size: "full" } })
    return await result.data[0].url;
  }
  catch(err) {
    console.log(err);
  }
}
