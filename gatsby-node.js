const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allDogsJson(sort: { fields: name, order: ASC }) {
        nodes {
          id
          name
          main
          about
          geo
          secondary
          image
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const dogs = result.data.allDogsJson.nodes;

  dogs.forEach((item) => {
    createPage({
      path: item.parent.name,
      component: path.resolve(`./src/components/DogPage/index.js`),
      context: { dog: item },
    });
  });
};
