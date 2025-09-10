import React, { useState } from 'react'
import { shortList, longList, list } from './data'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
const Carousel = () => {
  const [people, setPeople] = useState(list)

  const nextSlide = () => {
    setPeople((prevPeople) => {
      const [first, ...rest] = prevPeople
      return [...rest, first]
    })
  }
  const prevSlide = () => {
    setPeople((prevPeople) => {
      const last = prevPeople[prevPeople.length - 1]
      const rest = prevPeople.slice(0, prevPeople.length - 1)
      return [last, ...rest]
    })
  }

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, name, image, title, quote } = person
        return (
          <article
            key={id}
            className="slide"
            style={{ transform: `translateX(-${personIndex * 100}%)` }}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        )
      })}
      <button className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  )
}

export default Carousel
