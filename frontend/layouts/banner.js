'use client'
import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

const Bannar = () => {
  return (
    <section>
      <Container>
        <Carousel>
          <Carousel.Item>
            <Image
              src="https://res.cloudinary.com/dr116ydti/image/upload/v1770648317/samples/coffee.jpg"
              alt="Picture of the author"
             width={1920}
              height={500}
              unoptimized
              className='w-full h-[500px]'
            />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
             <Image
              src="https://res.cloudinary.com/dr116ydti/image/upload/v1770648313/samples/balloons.jpg"
              alt="Picture of the author"
             width={1920}
              height={500}
              unoptimized
              className='w-full h-[500px]'
            />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
           <Image
              src="https://res.cloudinary.com/dr116ydti/image/upload/v1770648303/samples/bike.jpg"
              alt="Picture of the author"
             width={1920}
              height={500}
              unoptimized
              className='w-full h-[500px]'
            />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  )
}

export default Bannar