import { IS_BETA } from "../statics";
export const config = {
    baseUrl: IS_BETA ? "https://api-beta.ergoraffle.com/api" : "https://api.ergoraffle.com/api"
}
