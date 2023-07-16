import "./PictureDescription.scss";

export function PictureDescription ({pictureMobile, pictureDesktop, handleClickAngleLeft, handleClickAngleRight}) {

    return (
        <div className="containerPicture">
            <picture>
                <source media="(min-width:600px)" srcSet={pictureDesktop}></source>
                <img src={pictureMobile} alt="" />
            </picture>

            <div className="icon-angle">
                <div className="angle-left" onClick={handleClickAngleLeft}>
                    <img src="images/icon-angle-left.svg" alt="" />
                </div>
                <div className="angle-right" onClick={handleClickAngleRight}>
                    <img src="images/icon-angle-right.svg" alt="" />
                </div>
            </div>
        </div>
       
    )
}