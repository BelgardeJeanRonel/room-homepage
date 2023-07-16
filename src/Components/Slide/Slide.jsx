import { useState, useEffect } from "react";
import { Description } from "../Description/Description";
import { PictureDescription } from "../Picture/PictureDescription";
import "./Slide.scss";

const datasDescription = [
    {
        pictureDesktop : "images/desktop-image-hero-1.jpg",
        pictureMobile : "images/mobile-image-hero-1.jpg",
        title : "Discover innovative ways to decorate",
        content : "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love"
    },
    {
        pictureDesktop : "images/desktop-image-hero-2.jpg",
        pictureMobile : "images/mobile-image-hero-2.jpg",
        title : "We are available all across the globe",
        content : "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        pictureDesktop : "images/desktop-image-hero-3.jpg",
        pictureMobile : "images/mobile-image-hero-3.jpg",
        title : "Manufactured with the best materials",
        content : "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]


export function Slide () {

    const [ index, setIndex ] = useState(0);

    const handleClickAngleRight = () => {

        if (index === 2) {
            setIndex(0)
        }else{
            setIndex(index + 1);
        }
    }

    const handleClickAngleLeft = () => {

        if (index === 0) {
            setIndex(2)
        }else{
            setIndex(index - 1);
        }
    }


    useEffect( () => {

        function handleKeydown (e) {
    
            if (e.keyCode == 37) {
                if (index === 0) {
                    setIndex(2)
                }else{
                    setIndex(index - 1);
                }
            } else if (e.keyCode == 39) {
                if (index === 2) {
                    setIndex(0)
                }else{
                    setIndex(index + 1);
                }
            }
    
        }

        document.addEventListener('keydown', handleKeydown);

        return function cleanup () {
            document.removeEventListener('keydown', handleKeydown)
        }
    }, [index]);

    



    const descriptions = datasDescription.map( (description) => 
        <section className="sectionDescription">
        <PictureDescription 
            pictureDesktop={description.pictureDesktop}
            pictureMobile={description.pictureMobile}
            handleClickAngleLeft={handleClickAngleLeft}
            handleClickAngleRight={handleClickAngleRight}
        />

        <Description 
            title={description.title}
            content={description.content}
        />
        </section>
    )

    return (

        <div className="container-slide">
        
            {descriptions[index]}

        </div>
       
       
    )
}
