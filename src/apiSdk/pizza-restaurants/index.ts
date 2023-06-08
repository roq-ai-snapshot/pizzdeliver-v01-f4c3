import axios from 'axios';
import queryString from 'query-string';
import { PizzaRestaurantInterface, PizzaRestaurantGetQueryInterface } from 'interfaces/pizza-restaurant';
import { GetQueryInterface } from '../../interfaces';

export const getPizzaRestaurants = async (query?: PizzaRestaurantGetQueryInterface) => {
  const response = await axios.get(`/api/pizza-restaurants${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createPizzaRestaurant = async (pizzaRestaurant: PizzaRestaurantInterface) => {
  const response = await axios.post('/api/pizza-restaurants', pizzaRestaurant);
  return response.data;
};

export const updatePizzaRestaurantById = async (id: string, pizzaRestaurant: PizzaRestaurantInterface) => {
  const response = await axios.put(`/api/pizza-restaurants/${id}`, pizzaRestaurant);
  return response.data;
};

export const getPizzaRestaurantById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/pizza-restaurants/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePizzaRestaurantById = async (id: string) => {
  const response = await axios.delete(`/api/pizza-restaurants/${id}`);
  return response.data;
};
