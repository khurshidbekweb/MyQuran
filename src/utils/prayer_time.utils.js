import { customAxiosPrayer } from "../configs/axios"


export const PrayerTimeUtils = {
    getDayTime:  async () => {
        const {data} = await customAxiosPrayer.get(`present/day?region=Toshkent`)
        return data
    }
}