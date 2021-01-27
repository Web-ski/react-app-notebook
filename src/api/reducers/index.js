const initialState = {
  payload: {
    twitters: [
      {
        id: '1',
        title: 'Hello Roman',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
        twitterName: 'hello_roman',
      },
      {
        id: '2',
        title: 'Redux guy',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '1 day',
        twitterName: 'dan_abramov',
      },
      {
        id: '3',
        title: 'React router stuff',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '5 days',
        twitterName: 'devenvpl',
      },
      {
        id: '4',
        title: 'AoT! Super anime!',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        created: '10 days',
        twitterName: 'Kajetan56526759',
      },
    ],
  },
};

const rootReducer = (state = initialState, action) => {
  if (action.type === 'ADD') {
    return state;
  }
  return state;
};

export default rootReducer;
