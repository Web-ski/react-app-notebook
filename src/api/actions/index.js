const removeItemAction = (itemType, id) => ({
  type: 'REMOVE_ITEM',
  payload: {
    itemType,
    id,
  },
});

const addItemAction = (itemType, content) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;

  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      itemContent: {
        id: getId(),
        ...content,
      },
    },
  };
};

export { removeItemAction, addItemAction };

// zły export

// const mockyArticle = {
//   id: 1,
//   title: 'Super title about React',
//   content:
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt labore molestias, quis excepturi eveniet debitis iure eligendi enim fuga officia quasi culpa sit fugit at recusandae quisquam nemo tenetur minima.',
//   twitterName: 'PaweNO1',
//   articleUrl: 'https://nieczuja-portfolio.pl',
//   created: '1 day',
// }
