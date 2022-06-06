import axios from 'axios';
import { baseURL } from '../assets/config';

const offerService = {
  
    async AddOffer({name, price, expirationDate, description, location, photos, tags}:
    { name: string; price: string; expirationDate:string;  description:string; location:string; photos:string; tags:string}) 
    {
    let json;
    try {
      const { data } = await axios.post(`${baseURL}/offers`, {
        name,
        price,
        expirationDate,
        description,
        location,
        photos,
        tags
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    return json;
  },

  async GetOffers({
  }: {
  }) {
    const res = await fetch(`${baseURL}offers`, {
      method: 'GET',
    });
    const json = await res.json();
    console.log(json);
    return json;
  }
};

export default offerService;
