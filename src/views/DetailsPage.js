/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouteMatch, Link } from 'react-router-dom';
import { routes } from 'routes';
import DetailTemplate from 'templates/DetailsTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  padding: 40px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapperNote = styled.div`
  min-height: 50%;
  padding: 40px;
  box-shadow: 0 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const DetailsPage = () => {
  const [type, setType] = useState('notes');
  const match = useRouteMatch();

  useEffect(() => {
    switch (match.path) {
      case routes.note:
        setType('notes');
        break;
      case routes.twitter:
        setType('twitters');
        break;
      case routes.article:
        setType('articles');
        break;
      default:
        setType('notes');
        break;
    }
  }, [match]);

  return (
    <DetailTemplate pageType={type}>
      <StyledWrapper>
        <StyledWrapperNote>
          <StyledHeading>Super title about React</StyledHeading>
          <DateInfo>date</DateInfo>
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt labore molestias,
            quis excepturi eveniet debitis iure eligendi enim fuga officia quasi culpa sit fugit at
            recusandae quisquam nemo tenetur minima.
          </Paragraph>
          <Button activeColor={type}>Save/Close</Button>
          <Link to="/">go back</Link>
        </StyledWrapperNote>
      </StyledWrapper>
    </DetailTemplate>
  );
};

export default DetailsPage;
