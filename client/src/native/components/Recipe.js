import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import {
  Container, Content, Card, CardItem, Body, H3, H2, List, ListItem, Text,
} from 'native-base';
import ErrorMessages from '../../constants/errors';
import Error from './Error';
import Spacer from './Spacer';
import Data from '../../../firebase/ex_database';

const RecipeView = ({
  recipeId,
}) => {
  // Error
  
  // if (recipeId) {
  //   recipe = recipes.find(item => parseInt(item.id, 10) === parseInt(recipeId, 10));
  // }
  const Data1 = new Data();
  let recipe = [];
  let clerk = [];
  if (recipeId) {
    const data = Data1.getData();
    recipe = data.containers.filter(el => el.id === recipeId);
    clerk = data.clerk[0];
  }
  if (recipe.length) {
    recipe = recipe[0];
  }
  else {
    return null;
  }

  // // Build Ingredients listing
  // const ingredients = recipe.ingredients.map(item => (
  //   <ListItem key={item} rightIcon={{ style: { opacity: 0 } }}>
  //     <Text>
  //       {item}
  //     </Text>
  //   </ListItem>
  // ));

  // // Build Method listing
  // const method = recipe.method.map(item => (
  //   <ListItem key={item} rightIcon={{ style: { opacity: 0 } }}>
  //     <Text>
  //       {item}
  //     </Text>
  //   </ListItem>
  // ));
  const actions = recipe.action.map((el, i) => {
    return <ListItem key={i}>
    <Text>{`${el.type} (${new Date(el.time)})`}</Text>
    </ListItem>
  });

  return (
    <Container>
      <Content padder>
      <Image
        source={{ uri: recipe.img[0] }}
        style={{
          height: 200,
          width: null,
          flex: 1,
          borderRadius: 5,
        }}
      />
      <H2 style={{marginTop: 10, textAlign: 'center'}}>{recipe.code}</H2>
      <H3 style={{marginTop: 20}}>Actions:</H3>
      {actions}
      <H3 style={{marginTop: 20}}>Comment:</H3>
      <Text>{recipe.text}</Text>
      <H3 style={{marginTop: 20}}>Clerk:</H3>
      <Text>{`${clerk.name} (${clerk.position})`}</Text>
        {/* <Image source={{ uri: recipe.image }} style={{ height: 100, width: null, flex: 1 }} />

        <Spacer size={25} />
        <H3>
          {recipe.title}
        </H3>
        <Text>
          by
          {' '}
          {recipe.author}
        </Text>
        <Spacer size={15} />

        <Card>
          <CardItem header bordered>
            <Text>
              About this recipe
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                {recipe.body}
              </Text>
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
            <Text>
              Ingredients
            </Text>
          </CardItem>
          <CardItem>
            <Content>
              <List>
                {ingredients}
              </List>
            </Content>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
            <Text>
              Method
            </Text>
          </CardItem>
          <CardItem>
            <List>
              {method}
            </List>
          </CardItem>
        </Card> */}

        <Spacer size={20} />
      </Content>
    </Container>
  );
};

RecipeView.propTypes = {
  // error: PropTypes.string,
  recipeId: PropTypes.string.isRequired,
  // recipes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

RecipeView.defaultProps = {
  // error: null,
};

export default RecipeView;
