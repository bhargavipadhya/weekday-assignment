import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Collapse from '@mui/material/Collapse';

const Card = () => {

    const [showMore, setShowMore] = useState(false);
    const text = "This is a sample job and you must have displayed it to understand that its not just some random\n" +
        "                        lorem ipsum text but something which was manually written. Oh well, if random text is what you\n" +
        "                        were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and\n" +
        "                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the\n" +
        "                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n" +
        "                        book. It has survived not only five centuries, but also the leap into electronic typesetting,\n" +
        "                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\n" +
        "                        sheets containing Lorem Ipsum passages and now in this assignment."

    return(
        <Paper elevation={3} sx={{ borderRadius: "20px" }}>
            <Grid container p={2} justifyContent="center" alignItems="center">
                <Grid item sx={{ cursor: 'pointer', width: '50px' }}>
                    <img alt="complex" src="https://logo.clearbit.com/sony.com" style={{ borderRadius: '50%', width: '100%' }}/>
                </Grid>

                <Grid item xs container direction="column" sx={{backgroundColor: 'white'}} ml={3}>
                    <Grid item xs >
                        <Grid item xs>
                            <Typography color='#a2a2a2' fontWeight="700" variant="subtitle1">Company Name</Typography>
                            <Typography variant="subtitle1">Job title</Typography>
                            <Typography variant="subtitle1" fontWeight='lighter' fontSize="0.8rem">Location</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="column" p={4}>
                <Grid item pb={1} mt={-3}>
                    <Typography variant="subtitle1" letterSpacing="1.2px" gutterBottom color="#36454F">
                        Estimated Salary: INR 3 to 7 LPA
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1" fontWeight="700">
                        Job Description
                    </Typography>
                </Grid>

                <Grid item mb={3} >
                    <Typography variant="body" fontWeight='lighter'>
                        <Collapse in={showMore} collapsedSize={80}>{showMore ? text : `${text.substring(0, 251)}...`}</Collapse>
                        <Button variant="text" size="small" textAlign="center" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</Button>
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography color='#a2a2a2' fontWeight="700" variant="subtitle1" letterSpacing="1.5px">
                        Experience Required
                    </Typography>
                </Grid>
                <Grid item mb={3}>
                    <Typography fontWeight="200" variant="subtitle1">
                        2 - 3 years
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
