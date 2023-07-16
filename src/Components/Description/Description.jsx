import { useElementOnScreen } from '../../CustomHooks/useElementOnScreen';
import { useEffect, useRef, useState } from "react";
import './Description.scss';

const options = {
  root : null,
  rootMargin : "0px",
  threshold : .1
}


export function Description ({title, content}) {

    const [ ref1, isVisible1 ] = useElementOnScreen(options);

    const [ ref2, isVisible2 ] = useElementOnScreen(options);

    console.log(isVisible1, isVisible2);


    return (
        <div className="description">
            <h1 ref={ref1} id='one' className={isVisible1 ? "reveal-2" : "reveal reveal-2"}>{title}</h1>
            <p>{content}</p>
            <a ref={ref2} id='' className={isVisible2 ? "revealLink-2" : "revealLink revealLink-2"}href="#">SHOP NOW <img src="/images/icon-arrow.svg" alt="" /></a>
        </div>
    )

}