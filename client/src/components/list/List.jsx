import React, { useRef, useState } from 'react'
import "../list/list.scss"
import ListItem from '../listitem/ListItem'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'

export default function List() {
  const[slideNumber, setSlideNumber] = useState(0) // used to slide the slides in countful manner so it wont get clicked if the slides are over
  const[isMoved, setIsMoved] = useState(false); //to hide the left button in slider

  const listRef = useRef()


  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x -50
    if(direction === "left" && slideNumber > 0){
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if(direction === "right" && slideNumber < 5){
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }
  return (
    <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
        <ArrowBackIos className='sliderArrow left'
        onClick={()=>handleClick("left")}
        style={{display: !isMoved && "none"}} //to hide the left button in slider
        />
        <div className="lcontainer" ref={listRef}>
            <ListItem index={0}/>
            <ListItem index={1}/>
            <ListItem index={2}/>
            <ListItem index={3}/>
            <ListItem index={4}/>
            <ListItem index={5}/>
            <ListItem index={6}/>
            <ListItem index={7}/>
            <ListItem index={8}/>
            <ListItem index={9}/>
        </div>
        <ArrowForwardIos className='sliderArrow right'onClick={()=>handleClick("right")}/>
    </div>
    </div>
  )
}
