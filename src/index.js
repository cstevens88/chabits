import ReactDOM from 'react-dom';
import React from 'react';
import Navigation from './components/navigation';
import Habit from './components/habit';


class App extends React.Component {
        state = {
            data: [],
        };
    render() {
    return (
        <div>
        <Navigation>
        </Navigation>
        <Habit></Habit>
        </div>
    );
    }
}
ReactDOM.render(<App />,
    document.getElementById('root'));