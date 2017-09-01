import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {




    return (
      <div className="fruit-basket">
        <Filter filters={props.filters} handleChange={props.onUpdateFilter} />
        <FilteredFruitList
          fruit={props.fruit} filters={props.filters} />
      </div>
    );
  
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
};


export default FruitBasket;
