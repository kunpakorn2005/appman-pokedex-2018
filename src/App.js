import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import './App.css';
import Modal from 'react-modal';
import PokemonsLists from './modal';
import Card from './card';

const Header = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 600px;
  overflow-y: scroll;
`;

const Column = styled.div`
  flex: 0 0 48%;
  margin: 10px;
`;

const Footer = styled.div`
  background-color: #ec5656;
  height: 120px;
  position: absolute;
  bottom: 0; 
  width: 1024px;
`;

const AddButton = styled.div`
  background-color: #ec5656;
  color: #fff;
  font-size: 100px;
  border-radius: 110px 110px;
  text-align: center;
  position: absolute;
  left: 42%;
  width: 180px;
  top: -50px;
  cursor: pointer;
`;

const customStylesForModal = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      showAddModal: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ showAddModal: true });
  }

  closeModal() {
    this.setState({ showAddModal: false });
  }

  render() {
    return (
      <div className="App">
        <Header>My Pokedex</Header>
        <Content>
          {
            this.props.myPokemon.map((value) => <Column key={value.id}><Card key={value.id} detail={value} mainPage /></Column>)
          }
        </Content>
        <Footer>
          <AddButton onClick={this.openModal}>
            +
          </AddButton>
          <Modal
            isOpen={this.state.showAddModal}
            shouldCloseOnOverlayClick={true}
            onRequestClose={this.closeModal}
            style={customStylesForModal}
            contentLabel="Pokemons"
          >
            <PokemonsLists initialPokemons={this.props.pokemons} />
          </Modal>
        </Footer>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons,
    myPokemon: state.addPokemons,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
