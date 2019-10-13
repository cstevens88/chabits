import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function Header(props) {
        return (
            <Grid
                container
                direction="row-reverse"
                justify="flex-start"
                alignItems="flex-start"
            >
                <Grid item>
                    Logout
                </Grid>
                <Grid item>
                    Account
                </Grid>
                <Grid item>
                    chabits
                </Grid>
            </Grid>
        );
}