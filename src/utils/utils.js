import { PIN_KEY } from "../statics";

const getPinnedRaffles = () => {
    const pinned = localStorage.getItem(PIN_KEY)
    if(pinned){
        return pinned.split(",").filter(item => !!item)
    }
    return []
}

const setPinnedRaffles = (pinned) => {
    pinned = pinned.filter((item, index) => index < 8)
    localStorage.setItem(PIN_KEY, pinned.join(","))
}

export {
    getPinnedRaffles,
    setPinnedRaffles,
}
