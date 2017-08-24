import React from 'react';
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';

export default class inventory extends React.Component {
  render () {
    return (
      <div className='home-container'>
          <div className='home'>
            <h1 className='inventory'><center> Inventory </center></h1>

                  <div className='ing-container'>
                      <div id='ingpic1' />
                        <div className='ingblock1'>
                          <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
                            <Input placeholder="Ingredients here!" />
                          </InputGroup>
                          <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
                            <Input placeholder="Ingredients here!" />
                          </InputGroup>
                          <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
                            <Input placeholder="Ingredients here!" />
                          </InputGroup>
                          <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
                            <Input placeholder="Ingredients here!" />
                          </InputGroup>
                        </div>
                  </div>
                      <div className='ing-container'>
                        <div id='ingpic2' />
                        <div className='ingblock2'>
                          <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
                            <Input placeholder="Ingredients here!" />
                          </InputGroup>
                          <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
                            <Input placeholder="Ingredients here!" />
                          </InputGroup>
                          <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
                            <Input placeholder="Ingredients here!" />
                          </InputGroup>
                          <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
                            <Input placeholder="Ingredients here!" />
                          </InputGroup>
                        </div>
                      </div>



                  <div className='ing-container'>
                    <div id='ingpic3' />
                      <div className='ingblock3'>
                      <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
                        <Input placeholder="Ingredients here!" />
                      </InputGroup>
                      <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
                        <Input placeholder="Ingredients here!" />
                      </InputGroup>
                      <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
                        <Input placeholder="Ingredients here!" />
                      </InputGroup>
                      <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
                        <Input placeholder="Ingredients here!" />
                      </InputGroup>
                  </div>
                  </div>
                      <div className='ing-container'>
                        <div id='ingpic4' />
                          <div className='ingblock4'>
                            <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
                              <Input placeholder="Ingredients here!" />
                            </InputGroup>
                            <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
                              <Input placeholder="Ingredients here!" />
                            </InputGroup>
                            <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
                              <Input placeholder="Ingredients here!" />
                            </InputGroup>
                            <InputGroup id='ingredientinput' size='sm' style={{width: '300px', height: '30px'}}>
                              <Input placeholder="Ingredients here!" />
                            </InputGroup>
                          </div>
                      </div>

              <div>
            <Button id='wizard' color="secondary">Wizard Ready!</Button>{' '}
              </div>
          </div>
      </div>
    )
  }
}
