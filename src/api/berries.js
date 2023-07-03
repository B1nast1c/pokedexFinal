import { log } from "../logger";
import { API_HOST } from "../utils/constants";

//TODO ESTO ES PARA CONECTARNOS A LA API, LA VERDAD ES QUE NO SE NECESITA DE ALGUNA KEY O ALGUNA WEA ASI, TOTAL ES GRATIS Y DIFICIL QUE FALLE LA VDD XD
//FALLA SI NO HAY INTERNET XDDDDDDDDDD

export async function getBerriesApi(endpointUrl) {
  try {
    const url = `${API_HOST}/item?limit=20&offset=0`;
    const response = await fetch(endpointUrl || url);
    const result = await response.json();
    return result;
  } catch (error) {
    log.error("No se puede conectar a la API, verifique su conexión");
    throw error;
  }
}


export async function getBerryApiTotal() {
  try {
    const url = `${API_HOST}/item?limit=200`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    log.error("No se puede conectar a la API, verifique su conexión");
    throw error;
  }
}


export async function getBerryDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    log.error("No se puede conectar a la API, verifique su conexión")
    throw error;
  }
}

export async function getBerryDetailsApi(id) {
  try {
    const url = `${API_HOST}/item/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    log.error("No se puede conectar a la API, verifique su conexión")
    throw error;
  }
}
