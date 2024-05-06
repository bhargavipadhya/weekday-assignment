import React, {useState} from 'react';
import './App.css';

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
            <div className="main-title">Search Jobs</div>

            {/*Filter container*/}
            <div className="filter-container">
                <div className="filter">filter 1</div>
                <div className="filter">filter 2</div>
                <div className="filter">filter 3</div>
                <div className="filter">filter 4</div>
                <div className="filter">filter 5</div>
                <div className="filter">filter 6</div>
                <div className="filter">filter 7</div>
            </div>

            <hr/>

            {/*Display search results i.e. job cards*/}
            <div className="search-results">
                {jobCard()}
                {jobCard()}
                {jobCard()}
            </div>
        </div>
    )
};

export default App;
