import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Loading from '../../components/Loading/Loading';
import Card from '../../components/Card/Card';

const LaunchPads = () => {
    
    const [ loading, setLoading ] = useState(true);
    const [ launchpads, setLaunchpads ] = useState([]);
    
    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            clearTimeout(loadingTimer);
            axios.get('https://api.spacexdata.com/v3/launchpads').then((response) => {
                //console.log(response.data);
                setLaunchpads(response.data);
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
                            launchpads.map((hist) => {
                                return (
                                    <div id={hist.id}>
                                        <Card>
                                            <b>Name:</b> {hist.name}<br />
                                            <b>Status:</b> {hist.status}<br />
                                            <b>Attempted:</b> {hist.attempted_launches}<br />
                                            <b>Successful:</b> {hist.successful_launches}<br />
                                            <b>Details:</b> {hist.details}<br />
                                            <a href={hist.wikipedia} target="_blank" rel="noopener noreferrer">Wikipedia</a>
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

export default LaunchPads;
