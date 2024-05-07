import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Collapse from '@mui/material/Collapse';

const Card = ({ data }) => {

    const [showMore, setShowMore] = useState(false);

    return(
        <Paper elevation={3} sx={{ borderRadius: "20px" }}>
            <Grid container p={2} justifyContent="center" alignItems="center">
                {data.logoUrl === null ? <></> : <Grid item sx={{ cursor: 'pointer', width: '50px' }} ml={2}>
                    <img alt="complex" src={data.logoUrl} style={{ borderRadius: '50%', width: '100%' }}/>
                </Grid>}

                <Grid item xs container direction="column" sx={{backgroundColor: 'white'}} ml={data.logoUrl === null ? 2 : 3}>
                    <Grid item xs >
                        <Grid item xs>
                            {data.companyName === null ? <></> : <Typography color='#a2a2a2' fontWeight="700" variant="subtitle1">{data.companyName}</Typography>}
                            {data.jobRole === null ? <></> : <Typography variant="subtitle1">{data.jobRole}</Typography>}
                            {data.location === null ? <></> : <Typography variant="subtitle1" fontWeight='lighter' fontSize="0.8rem">{data.location}</Typography>}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="column" p={4}>
                {data.minJdSalary === null || data.maxJdSalary == null ? <></> : <Grid item pb={1} mt={-3}>
                    <Typography variant="subtitle1" letterSpacing="1.2px" gutterBottom color="#36454F">
                        Estimated Salary: {data.salaryCurrencyCode} {data.minJdSalary} to {data.maxJdSalary} LPA
                    </Typography>
                </Grid>}

                {data.jobDetailsFromCompany === null ? <></> : <Grid item>
                    <Typography variant="subtitle1" fontWeight="700">
                        Job Description
                    </Typography>
                </Grid>}

                {data.jobDetailsFromCompany === null ? <></> : <Grid item mb={3} >
                    <Typography variant="body" fontWeight='lighter'>
                        <Collapse in={showMore} collapsedSize={80}>{showMore ? data.jobDetailsFromCompany : `${data.jobDetailsFromCompany.substring(0, 251)}...`}</Collapse>
                        <Button variant="text" size="small" textAlign="center" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</Button>
                    </Typography>
                </Grid>}

                {data.minExp === null || data.maxExp === null ? <></> : <Grid item>
                    <Typography color='#a2a2a2' fontWeight="700" variant="subtitle1" letterSpacing="1.5px">
                        Minimum Experience
                    </Typography>
                </Grid>}
                {data.minExp === null || data.maxExp === null ? <></> : <Grid item mb={3}>
                    <Typography fontWeight="200" variant="subtitle1">
                        {data.minExp} to {data.maxExp} years
                    </Typography>
                </Grid>}

                <Grid item>
                    <Button variant="contained" fullWidth>Apply</Button>
                </Grid>
            </Grid>
        </Paper>
    )
};

export default Card;
