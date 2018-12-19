import React, { Component } from 'react';
import styled from 'styled-components';
import { Line } from 'rc-progress';
import { addPokemonsToPokeDex, deletePokemonsFromPokeDex } from './action';
import { connect } from 'react-redux';

const AddButton = styled.button`
  position: absolute;
  cursor: pointer;
  display: none;
  top: 0;
  right: 10px;
  font-size: 20px;
  color: #dc7777;
  border: none;
  background: transparent;
`;

const WrapperBox = styled.div`
  position: relative;
  background-color: #e6e6e6;
  height: 220px;
  display: flex;
  padding: 10px;
  margin: 10px 0;
  &:hover ${AddButton} {
    display: block;
  }
`;

const CardImage = styled.img`
  width: 160px;
`;

const WrapperInfo = styled.div`
  width: 100%;
  margin-left: 20px;
`;

const DisplayText = styled.span`
  display: inline;
`;

class Card extends Component {
  constructor() {
    super();
    this.addPokemon = this.addPokemon.bind(this);
    this.calculateHp = this.calculateHp.bind(this);
    this.calculateStr = this.calculateStr.bind(this);
    this.calculateWeak = this.calculateWeak.bind(this);
    this.deletePokemon = this.deletePokemon.bind(this);
    this.calculateLevel = this.calculateLevel.bind(this);
    this.calculateDamage = this.calculateDamage.bind(this);
  }

  calculateHp(healthPoint) {
    if (healthPoint > 100) return 100;
    else if (healthPoint < 0) return 0;
    else return healthPoint;
  }

  calculateStr(atk) {
    if (atk && atk.length > 0) {
      return atk.length * 50;
    } else {
      return 0;
    }
  }

  calculateWeak(weak) {
    if (weak && weak.length > 0) {
      return weak.length * 100;
    } else {
      return 0;
    }
  }

  calculateDamage(damage = []) {
    let sumDmg = 0;
    damage.map((value) => {
      sumDmg += parseInt(value.damage.replace( /^\D+/g, ''), 10);
    });
    return sumDmg;
  }

  calculateLevel() {
    const hp = this.calculateHp(parseInt(this.props.detail.hp, 10));
    const damage = this.calculateDamage(this.props.detail.attacks);
    const weak = this.calculateWeak(this.props.detail.weaknesses);
    console.log(hp);
    console.log(damage);
    console.log(weak);
    return ((hp / 10) + (damage / 10 ) + 10 - (weak)) / 5;
  }

  addPokemon() {
    this.props.dispatch(addPokemonsToPokeDex(this.props.detail));
  }

  deletePokemon() {
    this.props.dispatch(deletePokemonsFromPokeDex(this.props.detail));
  }

  render() {
    let rating = [];
    return (
      <WrapperBox>
        <CardImage src={this.props.detail.imageUrl}/>
        <WrapperInfo>
          <div>
            {this.props.detail.name}
          </div>
          <div>
            <DisplayText>HP: <Line percent={this.calculateHp(parseInt(this.props.detail.hp, 10))} strokeWidth="2" strokeColor="#ec5656" /></DisplayText>
          </div>
          <div>
            <DisplayText>STR: <Line percent={this.calculateStr(this.props.detail.attacks)} strokeWidth="2" strokeColor="#ec5656" /></DisplayText>
          </div>
          <div>
            <DisplayText>WEAKNESS: <Line percent={this.calculateWeak(this.props.detail.weaknesses)} strokeWidth="2" strokeColor="#ec5656" /></DisplayText>
          </div>
          {
            this.calculateLevel()
          }
          {
            this.props.mainPage &&
              <AddButton onClick={this.deletePokemon}> X </AddButton>
          }
          {
            !this.props.mainPage &&
              <AddButton onClick={this.addPokemon}>Add</AddButton>
          }
        </WrapperInfo>
      </WrapperBox>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Card)
