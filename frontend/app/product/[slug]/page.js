import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Product = async ({ params }) => {
  let slug = await params
  // console.log(slug.slug);
  const data = await fetch(`http://localhost:8000/api/v1/product/viewsinglepro/${slug.slug}`)
  const posts = await data.json()
  console.log(posts);


  return (

    <section>
      <Container>
        {
          posts.map(item => (
            <Row>
              <Col>

                <Image
                  src={`http://localhost:8000${item.image}`}
                  alt={item.name}
                  width={500}
                  height={500}
                  unoptimized
                />
              </Col>
              <Col>
              <h1>{item.name}</h1>
              <p  dangerouslySetInnerHTML={{__html: item.des}}>


              </p>
              </Col>
            </Row>
          ))
        }



      </Container>
    </section>
  )
}

export default Product