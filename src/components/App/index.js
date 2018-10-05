import React from 'react';
import Counter from '../Counter/index';
import SuperMarket from '../SuperMarket';
import DevTools from 'mobx-react-devtools';


class App extends React.Component {
  componentDidMount(){}
  render() {
    return (
      <div>
        <Counter />
        <hr />
        <SuperMarket />
        {process.env.NODE_ENV === 'development' && <DevTools />}
      </div>
    );
  }
}

export default App;
