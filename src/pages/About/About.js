import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Loading from '../../components/Loading/Loading';
import Card from '../../components/Card/Card';

const About = () => {
    
    const [ loading, setLoading ] = useState(true);
    const [ info, setInfo ] = useState([]);
    
    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            clearTimeout(loadingTimer);
            axios.get('https://api.spacexdata.com/v3/info').then((response) => {
                //console.log(response.data);
                setInfo(response.data);
                setLoading(false);
            });
        }, 1500);
    }, []);

    return (
        <React.Fragment>
            {
                // Run loader animation
                loading ? (
                    <Loading />
                ) : (
                    // Load about info
                    <React.Fragment>
                        <Card>
                            <b>Name:</b> {info.name}<br />
                            <b>Founded Year:</b> {info.founded}<br />
                            <b>CEO:</b> {info.ceo}<br />
                            <b>COO:</b> {info.coo}<br />
                            <b>Valuation:</b> {info.valuation}<br />
                            <b>Summary:</b> {info.summary}<br />
                            <Link to="/">Back to main page</Link>
                        </Card>
                    </React.Fragment>
                )
            }
        </React.Fragment>
    );
}

export default About;
