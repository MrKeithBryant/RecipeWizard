import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RecipeModal from './RecipeModal';
import FoodCard from './FoodCard';

export default class kitchen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render () {
    return (
      <div className='home-container'>
        <div className='home'>
          <h1 className='inventory'><center> Ready Recipes </center></h1>
          <FoodCard backgroundImage='/FlamingBBQ.jpg'>
            <RecipeModal
              buttonLabel={this.props.RecipeName}
              title={this.props.RecipeName}
              Recipe={this.props.Recipe}
            />
            <RecipeModal
              buttonLabel={this.props.RecipeName}
              title={this.props.RecipeName}
              Recipe={this.props.Recipe}
            />
            <RecipeModal
              buttonLabel={this.props.RecipeName}
              title={this.props.RecipeName}
              Recipe={this.props.Recipe}
            />
            <RecipeModal
              buttonLabel={this.props.RecipeName}
              title={this.props.RecipeName}
              Recipe={this.props.Recipe}
            />
          </FoodCard>
          <FoodCard backgroundImage='/SushiPic.jpg'>
            <RecipeModal
              buttonLabel={this.props.RecipeName}
              title={this.props.RecipeName}
              Recipe={this.props.Recipe}
            />
            <RecipeModal
              buttonLabel={this.props.RecipeName}
              title={this.props.RecipeName}
              Recipe={this.props.Recipe}
            />
            <RecipeModal
              buttonLabel={this.props.RecipeName}
              title={this.props.RecipeName}
              Recipe={this.props.Recipe}
            />
            <RecipeModal
              buttonLabel={this.props.RecipeName}
              title={this.props.RecipeName}
              Recipe={this.props.Recipe}
            />
          </FoodCard>
        <h1 className='inventory'><center> Almost Ready </center></h1>
        <FoodCard backgroundImage='/Shrimp-Tacos.jpg'>
          <RecipeModal
            buttonLabel={this.props.RecipeName}
            title={this.props.RecipeName}
            Recipe={this.props.Recipe}
          />
          <RecipeModal
            buttonLabel={this.props.RecipeName}
            title={this.props.RecipeName}
            Recipe={this.props.Recipe}
          />
          <RecipeModal
            buttonLabel={this.props.RecipeName}
            title={this.props.RecipeName}
            Recipe={this.props.Recipe}
          />
          <RecipeModal
            buttonLabel={this.props.RecipeName}
            title={this.props.RecipeName}
            Recipe={this.props.Recipe}
          />
        </FoodCard>
        </div>
      </div>
    );
  }
}
