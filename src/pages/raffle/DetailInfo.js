import React, { useState } from "react";
import { toast } from "react-toastify";
import Day from "../../components/Day";
import { getPinnedRaffles, setPinnedRaffles } from "../../utils/utils";
import HtmlToReactParser from 'html-to-react';
import ShareModal from "../../webparts/Modal/ShareModal";

const DetailInfo = ({raffle}) => {
    const [shareModal, setShareModal] = useState(false);
    const htmlToReactParser = new HtmlToReactParser.Parser();
    const tagRaffle = () => {
        let pinned = getPinnedRaffles().reverse();
        if (pinned.includes(raffle.id)) {
            pinned = pinned.filter(item => item !== raffle.id)
            toast('Raffle Un Pinned');
        } else {
            pinned.push(raffle.id)
            toast('Raffle Pinned');
        }
        setPinnedRaffles(pinned.reverse())
    }
    console.log(shareModal)
    return (
        <React.Fragment>
            <h2 className="raffle-title">{raffle.name}</h2>
            <p className="raffle-full-text my-1">
                {htmlToReactParser.parse(raffle.description)}
            </p>
            <div className="raffle-bottom-container d-flex align-items-center">
                <span className="icon-deadline deadline"/>
                <p className="deadline-date">Deadline: <Day deadline={raffle.deadline} add_suffix={true}/></p>
                <div className="raffle-icons flex-grow-1 d-flex justify-content-end">
                    <button className="tag" id="tag-icon" onClick={tagRaffle}>
                        <span className="icon-tag tag-icon"/>
                    </button>
                    <button className="share" id="share-icon" onClick={() => setShareModal(true)}>
                        <span className="icon-new-share share-icon"/>
                    </button>
                </div>
            </div>
            <ShareModal close={() => setShareModal(false)} show={shareModal}/>

        </React.Fragment>
    )
};

export default DetailInfo;
