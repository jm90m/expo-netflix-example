import React, { Component } from 'react';
import styled from 'styled-components/native';
import Header from 'components/common/header';
import { COLORS } from 'constants/styles';
import { TouchableWithoutFeedback, ScrollView, TouchableOpacity } from 'react-native';
import ShowData from 'data/data';
import Icon from 'react-native-vector-icons/FontAwesome';

const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.GREY.BLACK_RUSSIAN};
`;

const UserNavigationContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.GREY.BLACK_RUSSIAN};
`;

const UserNavigationLink = styled.View`
  margin-right: 10;
  margin-left: 10;
  margin-top: 10;
  padding-top: 10;
  padding-right: 10;
  padding-left: 10;
  padding-bottom: 10;
  background-color: ${COLORS.GREY.BLACK_RUSSIAN};
  border-bottom-width: 5;
`;

const ActiveUserNavigationLink = styled(UserNavigationLink)`
  border-bottom-color: ${COLORS.RED.FIRE_ENGINE_RED};
`;

const UserNavigationLinkText = styled.Text`
  color: ${COLORS.WHITE.WHITE}
`;

const ImageContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const Image = styled.Image`
  width: 75;
  height: 100;
  margin-left: 5;
  margin-right: 5;
  margin-top: 10;
`;

const SubHeader = styled.View`
  padding-top: 15;
  padding-bottom: 5;
  padding-left: 15;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SubHeaderTextContainer = styled.View`
`;

const SubHeaderTitleText = styled.Text`
  color: ${COLORS.WHITE.WHITE};
`;

const SubHeaderText = styled.Text`
  color: ${COLORS.GREY.BRIGHT_GREY};
`;

const AllContainer = styled.View`
  align-self: flex-end;
  display: flex;
  flex-direction: row;
`;

const AllText = styled.Text`
  color: ${COLORS.GREY.BRIGHT_GREY};
  align-self: center;
  margin-right: 5;
`;

const IconContainer = styled.View`
  margin-right: 10;
`;

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'browse',
    };

    this.setActiveUserNavigation = this.setActiveUserNavigation.bind(this);
  }

  setActiveUserNavigation(selected) {
    this.setState({
      selected,
    });
  }

  renderUserNavigation() {
    const userNavigation = [{ title: 'BROWSE', id: 'browse' }, { title: 'MY LIST', id: 'my-list' }];
    const { selected } = this.state;

    return userNavigation.map((element, index) => {
      if (selected === element.id) {
        return (
          <TouchableWithoutFeedback
            onPress={() => this.setActiveUserNavigation(element.id)}
            key={index}
          >
            <ActiveUserNavigationLink>
              <UserNavigationLinkText>{element.title}</UserNavigationLinkText>
            </ActiveUserNavigationLink>
          </TouchableWithoutFeedback>
        );
      } else {
        return (
          <TouchableWithoutFeedback
            onPress={() => this.setActiveUserNavigation(element.id)}
            key={index}
          >
            <UserNavigationLink>
              <UserNavigationLinkText>{element.title}</UserNavigationLinkText>
            </UserNavigationLink>
          </TouchableWithoutFeedback>
        );
      }
    });
  }

  render() {
    return (
      <Container>
        <Header openDrawer={() => this.props.navigation.navigate('DrawerOpen')} />
        <UserNavigationContainer>
          {this.renderUserNavigation()}
        </UserNavigationContainer>
        <SubHeader>
          <SubHeaderTextContainer>
            <SubHeaderTitleText>
              {'Trending Now'}
            </SubHeaderTitleText>
            <SubHeaderText>
              {'Recommended for you'}
            </SubHeaderText>
          </SubHeaderTextContainer>
          <AllContainer>
            <AllText>{'All'}</AllText>
            <IconContainer>
              <Icon name={'angle-right'} size={20} color={COLORS.GREY.BRIGHT_GREY} />
            </IconContainer>
          </AllContainer>
        </SubHeader>
        <ScrollView horizontal={true}>
          <ImageContainer>
            {ShowData.map((show, index) => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ShowDetails', show)}
                key={index}
              >
                <Image source={show.image} key={index} />
              </TouchableOpacity>
            ))}
          </ImageContainer>
        </ScrollView>
        <SubHeader>
          <SubHeaderTitleText>
            {'Continue Watching for JM'}
          </SubHeaderTitleText>
          <AllContainer>
            <AllText>{'All'}</AllText>
            <IconContainer>
              <Icon name={'angle-right'} size={20} color={COLORS.GREY.BRIGHT_GREY} />
            </IconContainer>
          </AllContainer>
        </SubHeader>
        <ScrollView horizontal={true}>
          <ImageContainer>
            {ShowData.map((show, index) => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ShowDetails', show)}
                key={index}
              >
                <Image source={show.image} key={index} />
              </TouchableOpacity>
            ))}
          </ImageContainer>
        </ScrollView>
        <SubHeader>
          <SubHeaderTitleText>
            {'Recently Added'}
          </SubHeaderTitleText>
          <AllContainer>
            <AllText>{'All'}</AllText>
            <IconContainer>
              <Icon name={'angle-right'} size={20} color={COLORS.GREY.BRIGHT_GREY} />
            </IconContainer>
          </AllContainer>
        </SubHeader>
        <ScrollView horizontal={true}>
          <ImageContainer>
            {ShowData.map((show, index) => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ShowDetails', show)}
                key={index}
              >
                <Image source={show.image} />
              </TouchableOpacity>
            ))}
          </ImageContainer>
        </ScrollView>
      </Container>
    );
  }
}

export default HomeScreen;
