const BASE_URL = 'https://swapi.dev/api/';

const fetchData = async (endpoint: string, params: string = '') => {
  const url = `${BASE_URL}${endpoint}${params}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const fetchPeople = async (pageNumber = 1, searchQuery = '') => {
  const params = `?page=${pageNumber}&search=${searchQuery}`;
  return fetchData('people/', params);
};

export const fetchPersonDetail = async (id: string) => {
  return fetchData(`people/${id}/`);
};

export const fetchFilmsDetail = async (id: string) => {
  return fetchData(`films/${id}/`);
};

export const fetchStarshipsDetail = async (id: string) => {
  return fetchData(`starships/${id}/`);
};

export const fetchVehicleDetail = async (id: string) => {
  return fetchData(`vehicles/${id}/`);
};

export const fetchSpeciesDetail = async (id: string) => {
  return fetchData(`species/${id}/`);
};

export const fetchPlanetDetail = async (id: string) => {
  return fetchData(`planets/${id}/`);
};
