import React, {useState} from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Card from "./Card";
import Typography from "@mui/material/Typography";


const App = () => {

    const [data, setData] = useState('');

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
        "limit": 20,
        "offset": 0
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
    };

    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
        .then((response) => response.text())
        .then((result) => setData(result))
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

    const jobCard = () => (
        <div className="job-card">
            <div className="job__company-info">
                <div className="company-logo">
                    <img src="https://logo.clearbit.com/sony.com" alt="company logo" width="70px"/>
                </div>
                <div className="company-info">
                    <div className="job-title">Job Title</div>
                    <div className="company-name">Company name</div>
                    <div className="location">location</div>
                </div>
            </div>

            <div className="estimated-salary">Estimated Salary: </div>

            <div className="job-description-container">
                <div className="title">Job Description</div>
                <div className="description">lorem ipsum</div>
            </div>

            <div className="experience-required">Experience required: </div>

            <button>Apply</button>
        </div>
    );

    return(
        <div>
            {/*main title*/}
            {/*<div className="main-title">Search Jobs</div>*/}

            <Typography>Search Jobs</Typography>

            {/*Filter container*/}
            <Grid container spacing={2}>
                <Grid sx={{ border: '1px solid black' }} m={2} item xs={12} sm={6} md={2}>filter 1</Grid>
                <Grid sx={{ border: '1px solid black' }} m={2} item xs={12} sm={6} md={2}>filter 2</Grid>
                <Grid sx={{ border: '1px solid black' }} m={2} item xs={12} sm={6} md={2}>filter 3</Grid>
                <Grid sx={{ border: '1px solid black' }} m={2} item xs={12} sm={6} md={2}>filter 4</Grid>
                <Grid sx={{ border: '1px solid black' }} m={2} item xs={12} sm={6} md={2}>filter 5</Grid>
                <Grid sx={{ border: '1px solid black' }} m={2} item xs={12} sm={6} md={2}>filter 6</Grid>
                <Grid sx={{ border: '1px solid black' }} m={2} item xs={12} sm={6} md={2}>filter 7</Grid>
            </Grid>



            <hr/>

            {/*Display search results i.e. job cards*/}
            <div className="search-results">

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card />
                    </Grid>
                </Grid>


            </div>
        </div>
    )
};

export default App;
