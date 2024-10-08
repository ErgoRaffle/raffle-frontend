import { memo, useState } from "react";
import * as constant from "../../statics";
import preview from '../../assets/img/preview.png';
import { toast } from "react-toastify";

const isFileImage = (file) => {
    return file && file['type'].split('/')[0] === 'image';
}

const RaffleImgFileUploader = ({setValid, setValue, url}) => {
    const [loading, setLoading] = useState(false)
    const upload_file = (e) => {
        const file_value = e.target.files[0]
        if (!loading) {
            debugger
            if(!isFileImage(file_value)){
                toast("File type is not supported.")
            }else if(file_value.size > constant.FILE_SIZE_LIMITATION) {
                toast("File is too big")
            }else{
                setLoading(true)
                let form = new FormData();
                form.append('file', file_value);
                return fetch(constant.UPLOAD_API_URL, {
                    method: 'POST',
                    body: form,
                }).catch(res => {
                    console.log(res)
                    toast(res)
                }).then(res => res.json()).then(res => {
                    debugger
                    setValue(`${constant.TMP_PREFIX}${res.data.url.substring(constant.FILE_TO_SEND_PREFIX.length)}`)
                    setLoading(false)
                })
            }
        }
    }
    setValid(!loading)
    return (
        <div className="col-md-3 col-xs-6">
            <form>
                <div className="mb-3 overflow-hidden">
                    <label className="upload-image">
                        <input
                            disabled={loading}
                            className={loading ? "pt-4 disabled" : "pt-4"}
                            type="file"
                            onChange={upload_file}/>
                    </label>
                    <img
                        src={url ? `${constant.FILE_URL_PREVIEW_BEFORE_IPFS}${url.substring(constant.TMP_PREFIX.length)}` : preview}
                        className='image-preview'
                        alt='raffle image preview'/>
                </div>
            </form>
        </div>
    )
};

export default RaffleImgFileUploader;
