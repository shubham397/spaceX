import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Loading from '../../components/Loading/Loading';
import Card from '../../components/Card/Card';

const Rockets = () => {
    
    const [ loading, setLoading ] = useState(true);
    const [ rockets, setRockets ] = useState([]);
    
    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            clearTimeout(loadingTimer);
            axios.get('https://api.spacexdata.com/v3/rockets').then((response) => {
                //console.log(response.data);
                setRockets(response.data);
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
                    // Load each rocket from the rocket array
                    <React.Fragment>
                        { 
                            rockets.map((rock) => {
                                return (
                                    <div id={rock.id}>
                                        <Link to={`/rockets/${rock.rocket_id}`}>
                                            <Card>
                                                <b>Rocket Name:</b> {rock.rocket_name}<br />
                                                <b>Cost per launch:</b> {rock.cost_per_launch}<br />
                                                <b>Success Rate:</b> {rock.success_rate_pct} percent<br />
                                            </Card>
                                        </Link>
                                    </div>
                                );
                            })
                        }            
                    </React.Fragment>
                )
            }
        </React.Fragment>
    );
}

export default Rockets;
