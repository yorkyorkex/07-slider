import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { useState } from 'react'
import { list } from './data'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const SlickCarousel = () => {
  const [people, setPeople] = useState(list)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    nextArrow: <FiChevronRight />,
    prevArrow: <FiChevronLeft />,
    cssEase: 'linear',
  }
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {list.map((person) => {
          const { id, name, image, title, quote } = person
          return (
            <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })}
      </Slider>
    </section>
  )
}

export default SlickCarousel
