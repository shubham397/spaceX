import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Loading from '../../components/Loading/Loading';
import Card from '../../components/Card/Card';

const Launches = () => {
    
    const [ loading, setLoading ] = useState(true);
    const [ launches, setLaunches ] = useState([]);
    
    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            clearTimeout(loadingTimer);
            axios.get('https://api.spacexdata.com/v3/launches').then((response) => {
                //console.log(response.data);
                setLaunches(response.data);
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
                    // Load each history item from the history array
                    <React.Fragment>
                        { 
                            launches.map((hist) => {
                                return (
                                    <div id={hist.id}>
                                        <Card>
                                            <b>Name:</b> {hist.mission_name}<br />
                                            <b>Year:</b> {hist.launch_year}<br />
                                            <b>Launch Site:</b> {hist.launch_site.site_name}<br />
                                            <b>Details:</b> {hist.details}<br />
                                            <a href={hist.links.wikipedia} target="_blank" rel="noopener noreferrer">Wikipedia</a>
                                        </Card>
                                    </div>
                                );
                            })
                        }            
                    </React.Fragment>
                )};
            }
        </React.Fragment>
    );
}

export default Launches;
