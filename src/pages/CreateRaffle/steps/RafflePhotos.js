import { memo, useState } from "react";
import { toast } from "react-toastify";
import * as constant from "../../../statics";
import RaffleImgFileUploader from "../../../webparts/Raffle/RaffleImgFileUploader";


const RafflePhotos = ({setValid, init, setValue}) => {
    const imgs = init.length < 4 ? [...init, null] : [...init]
    const [validate, setValidate] = useState([])
    const set_image_index = (index, img) => {
        let new_imgs = [...imgs]
        while(new_imgs.length <= index){
            new_imgs.push(null)
        }
        new_imgs[index] = img;
        setValue(new_imgs.filter(item => !!item))
    }
    const set_validate_index = (index, valid) => {
        let new_validate = [...validate]
        while(new_validate.length <= index){
            new_validate.push(true)
        }
        new_validate[index] = valid;
        if(new_validate.length !== validate.length || new_validate[index] !== validate[index]) {
            setValidate(new_validate)
        }
    }
    setValid(validate.filter(item => !item).length === 0);
    return (
        <div className="first-step step-1-b">
            <div className="step-content text-center text-lg-start">
                <h3 className="step-title mb-4">
                    Upload Up to 4 Photos.
                </h3>
                <div className="row">
                    {imgs.map((img, index) => <RaffleImgFileUploader
                            setValue={(url) => set_image_index(index, url)}
                            url={img}
                            setValid={valid => set_validate_index(index, valid)}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default RafflePhotos;
