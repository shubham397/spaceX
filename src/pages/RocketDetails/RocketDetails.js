import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import Loading from '../../components/Loading/Loading';
import Card from '../../components/Card/Card';

const RocketDetails = (props) => {
    
    const { rocketDetailsId } = props.match.params;

    const [ loading, setLoading ] = useState(true);
    const [ rocketDetails, setRocketDetails ] = useState({});
    
    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            clearTimeout(loadingTimer);
            axios.get(`https://api.spacexdata.com/v3/rockets/${rocketDetailsId}`).then((response) => {
                //console.log(response.data);
                setRocketDetails(response.data);
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
                    // Load info for this rocket
                    <React.Fragment>
                        { 
                            <div>
                                <Card>
                                    <b>Rocket Name:</b> {rocketDetails.rocket_name}<br />
                                    <b>Description:</b> {rocketDetails.description}<br />
                                    <b>Country:</b> {rocketDetails.country}<br />
                                    <Link to="/rockets">Back to rockets</Link>
                                </Card>
                            </div>
                        }            
                    </React.Fragment>
                )
            }
        </React.Fragment>
    );
}

RocketDetails.propTypes = {
    rocketDetailsId: PropTypes.oneOfType([
        PropTypes.string,
    ]),
}

export default RocketDetails;
