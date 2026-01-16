import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Link } from 'react-router-dom'
import 'react-modal-video/scss/modal-video.scss'
import './MissionStatementStyle.scss'

const MissionStatement = ({ subTitle, title, videoId, className, signature, pragraphs,images,orderLast }) => {
    const [video, setVideo] = useState(false)
    return (
        <div className="missionStatementArea">
            <div className="container">
                <div className="row">
                    <div className="statementTitle">
                        <p>Words from our Founder</p>
                        <h2>Robert Bagga</h2>
                    </div>
                    <div className={orderLast ? `${orderLast} col col-lg-6`:'col col-lg-6'}>
                        <div className="statementImageWrap">
                            <img src={images} alt="" />
                            {videoId && <i onClick={() => setVideo(true)} className="fa fa-play"></i>}
                            <ModalVideo
                                channel='youtube'
                                isOpen={video}
                                videoId={videoId}
                                onClose={() => () => setVideo(false)} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="statementContent">
                            {subTitle && <span>{subTitle}</span>}
                            {pragraphs.map((pragraph, i) => (
                                <p key={i}>{pragraph.text}</p>
                            ))}
                            <div className="btnStyle">
                                <Link to='/about'>More About Us..</Link>
                            </div>
                            {signature && <div className="signature">
                                <img src={signature} alt="" />
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MissionStatement