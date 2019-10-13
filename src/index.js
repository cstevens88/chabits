import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import ChainBadge from './components/chainBadge';
import DateBox from './components/dateBox';
import HabitChain from './components/habitChain';
import Header from './components/header';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        let date = new Date();
        return (
            <Container class="app-root">
                    <Grid item>
                        <Grid item
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start"
                        color="white"
                        >
                        <Grid item>
                            <DateBox
                                fullDate={new Date()}
                            />
                        </Grid>
                        <Grid item>
                            <DateBox
                                fullDate={new Date(date.setDate(date.getDate() - 1))}
                            />
                        </Grid>
                        <Grid item>
                            <DateBox
                                fullDate={new Date(date.setDate(date.getDate() - 1))}
                            />
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item>
                        <HabitChain name="habit1"/>
                    </Grid>
                <Header/>
            </Container>
        );
    }
}

ReactDOM.render(<App />,
    document.getElementById('root'));