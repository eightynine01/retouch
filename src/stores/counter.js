import {observable, action, decorate} from 'mobx';
import {observer} from 'mobx-react';

class CounterStore {
  number = 0;
  
  increase = () => {
    this.number++;
  };
  
  decrease = () => {
    this.number--;
  };
}

decorate(CounterStore, {
  number: observable,
  increase: action,
  decrease: action
});

export default observer(CounterStore);
