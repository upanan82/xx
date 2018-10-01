// import React from 'react';
// import TextInput from 'react-native';
// import {
//   Container, Content, Text, H1, H2, H3
// } from 'native-base';
// import Spacer from './Spacer';

// class Search extends React.Component {


//   render() {
//     return (
//       <Container>
//     <Content padder>
//       <Spacer size={30} />
//       <TextInput
//         // style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//       />
//       </Content>
//   </Container>
//     );
//   }
// }

// const About = () => (
//   <Container>
//     <Content padder>
//       <Spacer size={30} />
//       <H1>
//         Heading 1
//       </H1>
//       <Spacer size={10} />
//       <Text>
//         Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
//         tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
//         malesuada magna mollis euismod. Donec sed odio dui.
//         {' '}
//       </Text>

//       <Spacer size={30} />
//       <H2>
//         Heading 2
//       </H2>
//       <Spacer size={10} />
//       <Text>
//         Elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
//         mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
//         magna mollis euismod. Donec sed odio dui.
//         {' '}
//       </Text>

//       <Spacer size={30} />
//       <H3>
//         Heading 3
//       </H3>
//       <Spacer size={10} />
//       <Text>
//         Elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
//         mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
//         magna mollis euismod. Donec sed odio dui.
//         {' '}
//       </Text>
//     </Content>
//   </Container>
// );

// export default Search;

import React, { Component } from 'react';
import { TextInput } from 'react-native';
import {
  Container, Content, Text, H1, H2, H3, ListItem
} from 'native-base';
import Spacer from './Spacer';
import { Actions } from 'react-native-router-flux';

// hardcode
import Data from '../../../firebase/ex_database';

class SearchComponent extends Component {
  Data1 = new Data();

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      result: []
    };
  }

  getResult(text) {
    const data = this.Data1.getData();
    const result = data.containers.filter(el => el.code.toUpperCase().indexOf(text.toUpperCase()) === 0 && text !== '');
    console.log(result);
    this.setState({
      result,
      text
    });
  }

  render() {
    const style = {
      marginBottom: 5
    };
    const res = this.state.result.map((el, i) => <ListItem
      style={style}
      onPress={() => Actions.search({ match: { params: { id: String(el.id) } } })}
      key={i}><H3>{el.code}</H3></ListItem>);
    return (
      <Container style={{alignContent: 'center'}}>
        <Content padder>
          <TextInput
            placeholder="Search by ISO"
            style={{
              height: 40,
              borderColor: '#999',
              borderWidth: 1,
              borderRadius: 4,
              paddingLeft: '5%',
              paddingRight: '10%',
              marginTop: '10%'
            }}
            onChangeText={(a) => this.getResult(a)}
            value={this.state.text}
          />
          <Spacer size={30} />
          {res.length ? res : <Text style={{textAlign: 'center'}}>No result!</Text>}
        </Content>
      </Container>
    );
  }
}

export default SearchComponent;
