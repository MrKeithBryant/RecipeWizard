import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RecipeModal from './RecipeModal';

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
      <div>
        <div className='home'>
          <div className='kitchen'>
            <h3 className='ready'><center> Ready Recipes </center></h3>
                <div className='recipeGroup1'>
                  <div className='food-1'>
                    <div id='foodpic1'/>
                      <div className='recipeBlock'>
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

                                </div>
                  </div>
                <div className='recipeGroup2'>
                  <div className='food-2'>
                    <div id='foodpic2' />
                      <div className='recipeBlock1'>
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
                  </div>
                </div>
              </div>
            </div>
                <h3 className='almostready'><center> Almost Ready </center></h3>
                <div className='recipeGroup3'>
                  <div className='food-3'>
                    <div id='foodpic3' />
                      <div className='recipeBlock2'>
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
                  </div>
                </div>
          </div>
        </div>

      </div>
    </div>
    );
  }
}
