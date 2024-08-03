import { useMemberStore } from "@/stores"

const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
const baseUrl2 = 'https://pcapi-xiaotuxian-front,itheima.net'

const httpInterceptor = {
    invoke(options: UniApp.RequestOptions) {
        console.log(options)
        if (!options.url.startsWith('http')) {
            options.url = baseUrl + options.url
        }
        console.log(options?.url)
        options.timeout = 1000
        options.header = {
            ...options.header,
            'source-client': 'miniapp'
        }
        const MemberStore = useMemberStore()
        const token = MemberStore.profile?.token
        if (token) {
            options.header.Authorization = token
        }
    }
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)