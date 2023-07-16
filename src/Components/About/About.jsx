import { useElementOnScreen } from '../../CustomHooks/useElementOnScreen';
import './About.scss';

const options = {
    root : null,
    rootMargin : "0px",
    threshold : .1
}

export function About () {

    const [ ref3, isVisible3 ] = useElementOnScreen(options);

    return (
        <div className='container-about'>
            <div className='about-dark'><img src="/images/image-about-dark.jpg" alt="" /></div>

            <div className='about-text'>
                <h3 ref={ref3} className={isVisible3 ? "title reveal-2" : "title reveal reveal-2"} >ABOUT OUR FURNITURE</h3>
                <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you.
Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
            </div>

            <div className='about-light'><img src="/images/image-about-light.jpg" alt="" /></div>
        </div>
    )
}