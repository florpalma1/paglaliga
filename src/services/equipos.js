import axios from "axios";
import API_BASE_URL from "../config";

export const fetchEquipos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/equipos`);
    return response.data; // Devuelve los datos de equipos
  } catch (error) {
    console.error("Error fetching equipos:", error);
    throw error;
  }
};

export const addEquipo = async (nuevoEquipo) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/equipos`, nuevoEquipo);
    return response.data; // Devuelve el equipo agregado
  } catch (error) {
    console.error("Error adding equipo:", error);
    throw error;
  }
};
