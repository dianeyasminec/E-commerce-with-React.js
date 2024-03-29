import React from 'react';
import variety from '../backend/images/variety.jpg';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <h1 className="text-center lead display-4 py-2">Welcome to our Anitta's Shop!</h1>
      <img className="rounded mx-auto d-block img-fluid" src={variety} alt="" />
      <Container>
        <Row className="my-5">
          <Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={12}>
            <p className="lead">
              The latest trend in the market has been to go natural. Natural products are quite a rage and taking the market
              by storm, handmade soaps being one of them. So what is so different about handmade soaps from the normal ones
              available in the market?
            </p>
            <div className="py-3"><strong>1. Formulation</strong></div>
            <p className="lead">
              Handmade soaps, as the name suggests, are made by hand. This ropes out the procedure of being manufactured by
              a big machine set up in a factory. When the ingredients of the soap are mixed, natural glycerin is extracted
              from the same. The manufacturers of commercial soaps remove this glycerin and give it to cosmetic companies to
              earn a higher profit. On the other hand, handmade soaps retain the glycerin which prevents the skin from drying
              out. You can try the Sand For Soapaholics Body Soap Butter Up for buttery soft skin.
            </p>
            <div className="py-3"><strong>2. No Additives</strong></div>
            <p className="lead">
              Handmade soaps do not contain any chemical additives like SLS, SLES, parabens, etc. Commercial soaps are laden
              with these ingredients to make them lather more. Due to the addition of so many chemicals, there is practically
              no difference between soaps and detergents available in the market. This also brings down the costs of producing
              a normal soap, which is why you will always find a handmade soap expensive as compared to a commercial one.
            </p>
            <div className="py-3"><strong>3. Natural Ingredients</strong></div>
            <p className="lead">
              A handmade soap may not lather as much as a commercial one, and this is because of no chemicals. These soaps
              contain the natural goodness of ingredients like apple, berries, clay, rose, lavender, etc. Handmade soaps retain
              the properties of these natural ingredients which helps you to get better skin. For e.g, you can use soaps that
              contain butter to get smooth skin. Soaps with coffee, vanilla can be used for their skin lightening properties.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

