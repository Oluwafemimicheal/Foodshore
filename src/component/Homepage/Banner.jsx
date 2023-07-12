import React, {useState, useEffect} from 'react';
import { Hero } from '../style';


const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer']
  const [text, setText]= useState('')
  const [delta, setDelta] =useState(300-Math.random()*100)
  const period = 2000

  useEffect(()=>{
    let ticker = setInterval(()=>{
      tick()
    }, delta)
    return () => {
      clearInterval(ticker)
    }
  },[text])

  const tick = ()=>{
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updateText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0,text.length +1)
    setText(updateText)

    if(isDeleting){setDelta(prevDelta => prevDelta /2)}
    if(!isDeleting && updateText === fullText){
      setIsDeleting(true)
      setDelta(period)
    }else if(isDeleting && updateText === ''){
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }

    return (
      <Hero>
        <div className="hero-container container">
            <h1>We deliver your groceries {text}<br/> to your front door</h1>
        </div>
      </Hero>
    );
}

export default Banner;
