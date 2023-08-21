import React, { useRef, useState } from 'react'
import "../list/list.scss"
import ListItem from '../listitem/ListItem'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'

// export default function List({list}) {  
  
//   console.log("list------------>>>>" , list)// passing list as a prop which we creaed at the time of api calling in Home
//   const[slideNumber, setSlideNumber] = useState(0) // used to slide the slides in countful manner so it wont get clicked if the slides are over
//   const[isMoved, setIsMoved] = useState(false); //to hide the left button in slider

//   const listRef = useRef()


//   const handleClick = (direction) => {
//     setIsMoved(true)
//     let distance = listRef.current.getBoundingClientRect().x -50
//     if(direction === "left" && slideNumber > 0){
//       setSlideNumber(slideNumber - 1);
//       listRef.current.style.transform = `translateX(${230 + distance}px)`
//     }
//     if(direction === "right" && slideNumber < 5){
//       setSlideNumber(slideNumber + 1);
//       listRef.current.style.transform = `translateX(${-230 + distance}px)`
//     }
//   }
//   return (
//     <div className="list">
//         <span className="listTitle">{list.title}</span> //we have put list.title as the name coming from api of all the list
//         <div className="wrapper">
//         <ArrowBackIos className='sliderArrow left'
//         onClick={()=>handleClick("left")}
//         style={{display: !isMoved && "none"}} //to hide the left button in slider
//         />
//         <div className="lcontainer" ref={listRef}>
//           {list.content.map((item, i) => (
//             <ListItem index={i} item={item} />
//           ))}
            
//         </div>
//         <ArrowForwardIos className='sliderArrow right'onClick={()=>handleClick("right")}/>
//     </div>
//     </div>
//   )
// }


// -------------


export default function List({list}) {
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
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
        <ArrowBackIos className='sliderArrow left'
        onClick={()=>handleClick("left")}
        style={{display: !isMoved && "none"}} //to hide the left button in slider
        />
        <div className="lcontainer" ref={listRef}>
          {list.content.map((item, i) =>(
            <ListItem index={i} item={item} />
          ))}
            
            
        </div>
        <ArrowForwardIos className='sliderArrow right'onClick={()=>handleClick("right")}/>
    </div>
    </div>
  )
}
