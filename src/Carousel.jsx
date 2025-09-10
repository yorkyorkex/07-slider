import React, { useEffect, useState } from 'react'
import { shortList, longList, list } from './data'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
const Carousel = () => {
  const [people, setPeople] = useState(list)
  const [currentPerson, setCurrentPerson] = useState(0)

  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length
      return result
    })
  }
  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length
      return result
    })
  }

  useEffect(() => {
    const sliderId = setInterval(() => {
      nextSlide()
    }, 2000)

    return () => {
      clearInterval(sliderId)
    }
  }, [currentPerson])

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, name, image, title, quote } = person
        return (
          <article
            key={id}
            className="slide"
            style={{
              transform: `translateX(${(personIndex - currentPerson) * 100}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? 'visible' : 'hidden',
            }}
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
