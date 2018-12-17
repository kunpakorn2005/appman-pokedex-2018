import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import './App.css';
import axios from 'axios';
import {fetchAllPokemons, fetchPokemons} from './action';
import Modal from 'react-modal';
import PokemonsLists from './modal';

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
};

const Header = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const Content = styled.div`
  
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
        <Content></Content>
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
    pokemons: state.pokemons
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
