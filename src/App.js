import React, {useState} from 'react';

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

    return(
        <div>
            {data}
        </div>
    )
};

export default App;
