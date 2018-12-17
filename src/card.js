import React, { Component } from 'react';
import styled from 'styled-components';
import { Line } from 'rc-progress';

const WrapperBox = styled.div`
  background-color: #e6e6e6;
  height: 220px;
  display: flex;
  padding: 10px;
  margin: 10px 0;
`;

const CardImage = styled.img`
  width: 160px;
`;

const WrapperInfo = styled.div`
  width: 100%;
`;

class Card extends Component {
  constructor() {
    super();
    this.calculateHp = this.calculateHp.bind(this);
    this.calculateStr = this.calculateStr.bind(this);
    this.calculateWeak = this.calculateWeak.bind(this);
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

  render() {
    console.log(this.props.detail);
    return (
      <WrapperBox>
        <CardImage src={this.props.detail.imageUrl}/>
        <WrapperInfo>
          <div>
            {this.props.detail.name}
          </div>
          <div>
            <span>HP: <Line percent={this.calculateHp(parseInt(this.props.detail.hp, 10))} strokeWidth="2" strokeColor="#2db7f5" /></span>
          </div>
          <div>
            <span>STR: <Line percent={this.calculateStr(this.props.detail.attacks)} strokeWidth="2" strokeColor="#2db7f5" /></span>
          </div>
          <div>
            <span>WEAKNESS: <Line percent={this.calculateWeak(this.props.detail.weaknesses)} strokeWidth="2" strokeColor="#2db7f5" /></span>
          </div>
          {
            this.calculateLevel(this.props.detail)
          }
        </WrapperInfo>
      </WrapperBox>
    );
  }
}

export default Card
