import React from 'react';
import {
  Text,
} from 'native-base';
import Page from '../../components/Page';

type PropsType = {
  navigation: any,
};

export default class Home extends React.Component<PropsType> {
  render() {
    return (
      <Page>
        <Text>Accueil</Text>
      </Page>
    );
  }
}
