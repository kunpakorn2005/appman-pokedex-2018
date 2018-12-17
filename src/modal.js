import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import axios from 'axios';
import Card from './card';

const Wrapper = styled.div`
  width: 800px;
  overflow: scroll;
  height: 600px;
`;

const SearchBar = styled.input`
  color: #000;
  width: 100%;
`;

class PokemonsLists extends Component {
  render() {
    console.log(this.props.initialPokemons);
    return (
      <Wrapper>
        <SearchBar />
        {
          this.props.initialPokemons.map((value) => <Card key={value.id} detail={value} />)
        }
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokemon || [],
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsLists)
