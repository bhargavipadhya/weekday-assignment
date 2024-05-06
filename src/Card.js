import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from "@mui/material/ButtonBase";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Card = () => {
    return(
        <Paper elevation={3}>
            <Grid container spacing={2}>
                {/*<Grid item sx={{ cursor: 'pointer' }}>*/}
                {/*    <img alt="complex" src="https://logo.clearbit.com/sony.com" />*/}
                {/*</Grid>*/}
                <Grid item><Box
                    component="img" sx={{ borderRadius: '50%', cursor: 'pointer'}}
                    alt="Company logo"
                    src="https://logo.clearbit.com/sony.com"
                /></Grid>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs >
                        <Grid item xs>
                            <Typography>Job Title</Typography>
                            <Typography>Company name</Typography>
                            <Typography>Location</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="column">
                <Grid item>
                    <Typography>
                        Estimated Salary: ...
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography>
                        Job Description
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography>
                       lorem ipsum
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography>
                        Experience Required: ...
                    </Typography>
                </Grid>

                <Grid item>
                    <Button variant="contained" fullWidth>Apply</Button>
                </Grid>
            </Grid>
        </Paper>
    )
};

export default Card;
