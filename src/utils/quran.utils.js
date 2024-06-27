import { customAxiosQuran } from "../configs/axios"


export const QuranUtils = {
    getQuran: async () => {
        const {data} = await customAxiosQuran.get('v2/surat')
        return data
    }
}