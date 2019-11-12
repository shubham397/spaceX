import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Loading from '../../components/Loading/Loading';
import Card from '../../components/Card/Card';

const History = () => {
    
    const [ loading, setLoading ] = useState(true);
    const [ history, setHistory ] = useState([]);
    
    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            clearTimeout(loadingTimer);
            axios.get('https://api.spacexdata.com/v3/history').then((response) => {
                //console.log(response.data);
                setHistory(response.data);
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
                            history.map((hist) => {
                                return (
                                    <div id={hist.id}>
                                        <Card>
                                            <b>Title:</b> {hist.title}<br />
                                            <b>Event Date UTC:</b> {hist.event_date_utc}<br />
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

export default History;
