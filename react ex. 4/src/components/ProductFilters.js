import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../store';
import Checkbox from './Checkbox';

class ProductFilters extends React.Component {
  render() {
    return (
      <div>
        <Checkbox
          label="Выбрать все"
          checked={state.filters.isAllChecked}
          onChange={() => {
            state.filters.isAllChecked = !state.filters.isAllChecked;
            state.filters.isFruitChecked = state.filters.isAllChecked;
            state.filters.isVegetablesChecked = state.filters.isAllChecked;
            state.filters.isCannedfoodChecked = state.filters.isAllChecked;
            if (state.filters.isAllChecked) {
              state.category = ['fruit', 'vegetable', 'canned food'];
              console.log(state.filters.isAllChecked);
            } else {
              state.category = [];
            }
          }}
        />
        <hr />
        <Checkbox
          label="Фрукты"
          checked={state.filters.isFruitChecked}
          onChange={() => {
            state.filters.isFruitChecked = !state.filters.isFruitChecked;
            state.filters.isAllChecked = false;
            if (state.category.indexOf('fruit') !== -1) {
              state.category.splice(state.category.indexOf('fruit'), 1);
            } else {
              state.category.push('fruit');
            }
          }}
        />
        <Checkbox
          label="Овощи"
          checked={state.filters.isVegetablesChecked}
          onChange={() => {
            state.filters.isVegetablesChecked = !state.filters.isVegetablesChecked;
            state.filters.isAllChecked = false;
            if (state.category.indexOf('vegetable') !== -1) {
              state.category.splice(state.category.indexOf('vegetable'), 1);
            } else {
              state.category.push('vegetable');
            }
          }}
        />
        <Checkbox
          label="Консервы"
          checked={state.filters.isCannedfoodChecked}
          onChange={() => {
            state.filters.isCannedfoodChecked = !state.filters.isCannedfoodChecked;
            state.filters.isAllChecked = false;
            if (state.category.indexOf('canned food') !== -1) {
              state.category.splice(state.category.indexOf('canned food'), 1);
            } else {
              state.category.push('canned food');
            }
          }}
        />
      </div>
    );
  }
}

export default view(ProductFilters);
