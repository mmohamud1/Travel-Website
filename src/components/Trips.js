import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Button } from './Button';

const Trips = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  function getTrips(data) {
    const tripsArray = [];
    data.allTripsJson.edges.forEach((item, index) => {
      tripsArray.push(
        <ProductCard key={index}>
          <Img
            src={item.node.img.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProductInfo>
            <TextWrap>
              <ImLoaction />
              <ProductTitle>{item.node.name}</ProductTitle>
            </TextWrap>
            <Button to='/trips'>{item.node.button}</Button>
          </ProductInfo>
        </ProductCard>
      );
    });
    return tripsArray;
  }

  return (
    <ProductsContainer>
      <ProductsHeading>Heading</ProductsHeading>
      <ProductWrapper>{getTrips(data)}</ProductWrapper>
    </ProductsContainer>
  );
};

export default Trips;

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw -1300px) / 2);
  background: violet;
  color: #fff;
`;

const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`;

const ProductWrapper = styled.div``;

const ProductCard = styled.div``;
const ProductInfo = styled.div``;
const TextWrap = styled.div``;
const ProductTitle = styled.div``;
const ImLoaction = styled.div``;
