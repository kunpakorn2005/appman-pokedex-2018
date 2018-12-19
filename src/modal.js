import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Card from './card';
import { fetchPokemonsByKeyword } from './action';

const Wrapper = styled.div`
  width: 800px;
  overflow-y: scroll;
  height: 600px;
`;

const SearchBar = styled.input`
  color: #000;
  width: 94%;
  font-size: 18px;
  padding: 10px 20px;
  box-shadow: 0 5px 1px 0 rgba(234,234,234,1);
  border: 1px solid rgba(234,234,234,1);
`;

class PokemonsLists extends Component {
  constructor() {
    super();
    this.onChangeSearchInput = this.onChangeSearchInput.bind(this);
  }

  onChangeSearchInput(evt) {
    this.props.dispatch(fetchPokemonsByKeyword(evt.target.value));
  }

  render() {
    return (
      <Wrapper>
        <SearchBar placeholder="Find Pokemons" onChange={this.onChangeSearchInput} />
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
