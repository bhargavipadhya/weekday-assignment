import React, {useEffect, useState} from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Card from "./Card";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";


const App = () => {

    const [data, setData] = useState('');
    const [roles, setRoles] = useState([]);
    const [location, setLocation] = useState([]);
    const minPay = [0, 10, 20, 30, 40, 50, 60, 70]; // add L in the drop down
    const experience = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10]; // first value needs to be none in the dropdown
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
        "limit": 12,
        "offset": 0
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
    };

    const fetchFilterData = (d) => {
        let rolesArr = [];
        let locationArr = [];

        setData(d);
        d.jdList?.map(item => {
            rolesArr.push(item.jobRole)
            locationArr.push(item.location);
        });

        setRoles(rolesArr);
        setLocation(locationArr);
        console.log(d);
    };

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

    // handle changes to the role filter dropdown
    const [selectedRole, setSelectedRole] = React.useState([]);
    const handleRoleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedRole(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    useEffect(() => {
        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
            .then(response => response.json())
            // .then(res => console.log(res))
            .then(res => {
                fetchFilterData(res);
                // setData(res)
            })
            // .then((result) => console.log(result))
            .catch((error) => console.error(error));

    }, []);

    return(
        <div>
            {/*main title*/}
            {/*<div className="main-title">Search Jobs</div>*/}

            <Typography>Search Jobs</Typography>

            {/*Filter container*/}
            <Grid container spacing={2}>
                {/*<Grid sx={{ border: '1px solid black' }} m={2} item xs={12} sm={6} md={2}>*/}
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Role</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={selectedRole}
                            onChange={handleRoleChange}
                            input={<OutlinedInput label="Role" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}>
                            {roles.map((role) => (
                                <MenuItem key={role} value={role}>
                                    <Checkbox checked={selectedRole.indexOf(role) > -1} />
                                    <ListItemText primary={role} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                {/*</Grid>*/}

                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={selectedRole}
                        onChange={handleRoleChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}>
                        {roles.map((role) => (
                            <MenuItem key={role} value={role}>
                                <Checkbox checked={selectedRole.indexOf(role) > -1} />
                                <ListItemText primary={role} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={selectedRole}
                        onChange={handleRoleChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}>
                        {roles.map((role) => (
                            <MenuItem key={role} value={role}>
                                <Checkbox checked={selectedRole.indexOf(role) > -1} />
                                <ListItemText primary={role} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {/*<Grid sx={{ border: '1px solid black' }} m={2} item xs={12} sm={6} md={2}>Location ({location.length})</Grid>*/}
                {/*<Grid sx={{ border: '1px solid black' }} m={2} item xs={12} sm={6} md={2}>filter 3</Grid>*/}
                {/*<Grid sx={{ border: '1px solid black' }} m={2} item xs={12} sm={6} md={2}>filter 4</Grid>*/}
                {/*<Grid sx={{ border: '1px solid black' }} m={2} item xs={12} sm={6} md={2}>filter 5</Grid>*/}
                {/*<Grid sx={{ border: '1px solid black' }} m={2} item xs={12} sm={6} md={2}>filter 6</Grid>*/}
                {/*<Grid sx={{ border: '1px solid black' }} m={2} item xs={12} sm={6} md={2}>filter 7</Grid>*/}
            </Grid>



            <hr/>

            {/*console.log("data:", data)*/}

            {/*Display search results i.e. job cards*/}
            <div className="search-results">

                <Grid container spacing={3}>
                    {data.jdList?.map((d,i) => {

                        return(
                            <Grid item key={i} xs={12} sm={6} md={4}>
                                <Card data={d}/>
                            </Grid>
                        )
                    }

                    )}
                </Grid>


            </div>
        </div>
    )
};

export default App;
