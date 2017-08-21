import React from 'react';
import Pic1 from '../styles/pictures/BabyTomatoesPic.jpeg';
import Pic2 from '../styles/pictures/EggSaucerPic.jpg';
import Pic3 from '../styles/pictures/FreshVeggiesPic.jpeg';
export default class kitchen extends React.Component {
  render () {
    return (
      <div>
        <div className='home'>
          <div className='kitchen'>
            <h3 className='ready'><center> _Ready_Recipes_ </center></h3>
                <div className='ingredientGroup1'>
                  <div className='food-1'>
                    <img id='foodpic1' src={Pic1} />
                      <ol>

                      </ol>
                  </div>
                  <div className='food-2'>
                    <img id='foodpic2' src={Pic2} />
                      <ol>

                      </ol>
                  </div>
                </div>
                <div className='ingredientGroup2'>
                  <h3 className='almostready'><center> _Almost_Ready_</center></h3>
                  <div className='food-3'>

                      <img id='foodpic3' src={Pic3} />
                        <ol>

                        </ol>
                  </div>
                </div>
          </div>
        </div>
      </div>
    );
  }
}
