import { API_HOST } from "../utils/constants";
import { log } from "../logger";

export async function getPokemonsApi(endpointUrl) {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(endpointUrl || url);
    const result = await response.json();
    return result;
  } catch (error) {
    log.error("No se puede conectar a la API, verifique su conexión")
    throw error;
  }
}

export async function getPokemonsApiTotal() {
  try {
    const url = `${API_HOST}/pokemon?limit=1118`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    log.error("No se puede conectar a la API, verifique su conexión")
    throw error;
  }
}

export async function getPokemonDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    log.error("No se puede conectar a la API, verifique su conexión")
    throw error;
  }
}

export async function getPokemonDetailsApi(id) {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    log.error("No se puede conectar a la API, verifique su conexión")
    throw error;
  }
}

