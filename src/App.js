import React from 'react';
import ClassProps from './ClassProps';
import FunctionalProps from './FunctionalProps';


class App extends React.Component {
  render() {
    return (
      <div>
        <ClassProps name="Learner 1" place="place X"> <p>Child Companent</p></ClassProps>  {/*Learning how to display whatevcer we want between the opening and closing tags when invoking a component*/}
        <ClassProps name="Learner 2" place="place Y"> <button>Click</button></ClassProps>
        <ClassProps name="Learner 3" place="place Z"/>

        <FunctionalProps name="Learner 4" place="place A"/> 
        ("The End........................................")
      </div>
    );
  }
}

export default App;