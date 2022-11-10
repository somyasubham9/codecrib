import React from 'react'
import {Link} from 'react-router-dom'
import './Banner.css'

const Banner = () => {
    const clickHandler=()=>{
        window.scrollTo(0, document.body.scrollHeight);
    }
  return (
    <div>
    <Link href="#"></Link>
      <div className="hero">
        <div className="detel">
            <h1>Is Your Code <span>Stolen ?</span></h1>
            <p>Comprehensive and fast, the CodeCrib plagiarism code checker
                    can read multiple code languages.
                     </p>
                     <p>See it in action for yourself.</p>
            <Link onClick={clickHandler}  className='lets-check-btn' href="#">Let's Check </Link>
        </div>
        <div className="images">
            {/* <img src={image} alt='shape' className="shape"/> */}
            <lottie-player className='shape' src="https://assets4.lottiefiles.com/packages/lf20_kaelaowc.json"  background="transparent"  speed="1"  loop autoplay></lottie-player>
        </div>
        </div>
    </div>
  )
}

export default Banner

