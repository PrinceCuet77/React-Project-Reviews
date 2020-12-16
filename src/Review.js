import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
	let [index, setIndex] = useState(0)
	let { name, job, image, text } = people[index]

	let checkNumber = (number) => {
		if (number > people.length - 1) {
			return 0
		}
		if (number < 0) {
			return people.length - 1
		}
		return number
  }
  
  let nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1 
      return checkNumber(newIndex)
    })
  }

  let prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1 
      return checkNumber(newIndex)
    })
  }

  let randomPerson = () => {
    let newIndex = Math.floor(Math.random() * people.length)
    if (newIndex === index) { // avoid same number
      newIndex++ 
    }
    setIndex(checkNumber(newIndex))
  }

	return (
		<article className='review'>
			<div className='img-container'>
				<img src={image} alt={name} className='person-img' />
				<span className='quote-icon'>
					<FaQuoteRight />
				</span>
			</div>
			<h4 className='author'>{name}</h4>
			<p className='job'>{job}</p>
			<p className='info'>{text}</p>
			<div className='button-container'>
				<button className='prev-btn' onClick={prevPerson}>
					<FaChevronLeft />
				</button>
				<button className='next-btn' onClick={nextPerson}>
					<FaChevronRight />
				</button>
			</div>
			<button className='random-btn' onClick={randomPerson}>
				suprise me
			</button>
		</article>
	)
}

export default Review
