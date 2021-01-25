import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const twitters = [
  {
    title: 'Hello Roman',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
    twitterName: 'hello_roman',
  },
  {
    title: 'Redux guy',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
    twitterName: 'dan_abramov',
  },
  {
    title: 'React router stuff',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
    twitterName: 'devenvpl',
  },
  {
    title: 'Super animacje!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days',
    twitterName: 'sarah_edo',
  },
];

const Twitters = () => (
  <GridTemplate pageType="twitters">
    {twitters.map(({ title, content, created, twitterName, id }) => (
      <Card
        cardId={id}
        cardType="twitters"
        title={title}
        content={content}
        created={created}
        twitterName={twitterName}
        key={title}
      />
    ))}
  </GridTemplate>
);
export default Twitters;
