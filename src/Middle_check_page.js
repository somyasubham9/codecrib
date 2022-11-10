import React from 'react'
import "./middle_check.css"
const Middle_check_page = () => {
  return (
    <>
        <div className="mid-player">
        <div className="player1">
        <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_ja4nw9sz.json"  background="transparent"  speed="1"    loop  autoplay></lottie-player>
        </div>
        <div className="player2">
        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_u6vosnrk.json"  background="transparent"  speed="1"   loop  autoplay></lottie-player>
        </div>
        <div className="player3">
        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_ohekfnfw.json"  background="transparent"  speed="1"   loop  autoplay></lottie-player>
        </div>
        <div className="player4">
        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_4laqe43l.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
        </div>
        
      
        </div>
    </>
  )
}

export default Middle_check_page