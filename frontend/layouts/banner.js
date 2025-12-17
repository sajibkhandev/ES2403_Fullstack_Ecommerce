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
              src="http://localhost:8000/uploads/1765985728658-838233153-bb26b148-a62c-4ab0-b4c9-b90e253e49ec_BD-1976-688.jpg_2200x2200q80.jpg_.avif"
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
              src="http://localhost:8000/uploads/1765985042524-367661701-pexels-karola-g-5632369.jpg"
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
              src="http://localhost:8000/uploads/1765985728658-838233153-bb26b148-a62c-4ab0-b4c9-b90e253e49ec_BD-1976-688.jpg_2200x2200q80.jpg_.avif"
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