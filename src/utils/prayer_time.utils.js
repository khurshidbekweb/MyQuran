import { customAxiosPrayer } from "../configs/axios"

// const month = new Date().getMonth()

export const PrayerTimeUtils = {
    getDayTime:  async () => {
        const {data} = await customAxiosPrayer.get(`present/day?region=Toshkent`)
        return data
    },
    getMonthTime: async () => {
        const {data} = await customAxiosPrayer.get(`/present/week?region=Toshkent`)
        return data
    }
}