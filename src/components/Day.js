import { useContext } from "react";
import ThemeContext from "../context";
import * as constants from '../statics';

const Day = ({deadline, add_suffix, remaining_block}) => {
    const { info } = useContext(ThemeContext);
    const suffix = deadline > info.height ? "to Go" : "Passed"
    const to_str_result = (amount, unit) => {
        const display_suffix = add_suffix ? suffix : ""
        const plural_sign = (amount > 1 ? "s": "")
        return `${amount} ${unit}${plural_sign} ${display_suffix}`
    }
    remaining_block = remaining_block === undefined ? Math.abs(deadline - info.height) : remaining_block;
    const days = Math.floor(remaining_block / constants.DAY_BLOCK_COUNT);
    remaining_block -= days * constants.DAY_BLOCK_COUNT;
    const hours = Math.floor(remaining_block / constants.HOUR_BLOCKS_COUNT);
    remaining_block -= hours * constants.HOUR_BLOCKS_COUNT;
    const minutes = Math.floor(remaining_block / constants.MINUTE_BLOCK_COUNT);
    if(days > 0) return to_str_result(days, "Day")
    if(hours > 0) return to_str_result(hours, "Hour")
    return to_str_result(minutes, "Minute")
}


export default Day;
