import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Loading from '../../components/Loading/Loading';
import Card from '../../components/Card/Card';

const Mission = () => {
    
    const [ loading, setLoading ] = useState(true);
    const [ mission, setMission ] = useState([]);
    
    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            clearTimeout(loadingTimer);
            axios.get('https://api.spacexdata.com/v3/missions').then((response) => {
                //console.log(response.data);
                setMission(response.data);
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
                            mission.map((hist) => {
                                return (
                                    <div id={hist.id}>
                                        <Card>
                                            <b>Title:</b> {hist.mission_name}<br />
                                            <b>Details:</b> {hist.description}<br />
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

export default Mission;
