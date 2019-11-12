import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Loading from '../../components/Loading/Loading';
import Card from '../../components/Card/Card';

const Ships = () => {
    
    const [ loading, setLoading ] = useState(true);
    const [ ships, setShips ] = useState([]);
    
    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            clearTimeout(loadingTimer);
            axios.get('https://api.spacexdata.com/v3/ships').then((response) => {
                //console.log(response.data);
                setShips(response.data);
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
                            ships.map((rock) => {
                                return (
                                    <div id={rock.id}>
                                        <Link to={`/ships/${rock.ship_id}`}>
                                            <Card>
                                                <b>Ship Name:</b> {rock.ship_name}<br />
                                                <b>Ship Type:</b> {rock.ship_type}<br />
                                                <b>status:</b> {rock.status}<br />
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

export default Ships;
