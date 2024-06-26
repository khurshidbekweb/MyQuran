import axios from "axios";
import { BASE_URL_QURAN } from "../constants/baseUrlQuran";
import { BASE_URL_PRAYER } from "../constants/baseUrlPrayer";

export const customAxiosQuran = axios.create({
    baseURL: BASE_URL_QURAN,
    timeout: 100000
})
export const customAxiosPrayer = axios.create({
    baseURL: BASE_URL_PRAYER,
    timeout: 100000
})