import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import Loading from '../../components/Loading/Loading';
import Card from '../../components/Card/Card';

const ShipDetails = (props) => {
    
    const { shipDetailsId } = props.match.params;

    const [ loading, setLoading ] = useState(true);
    const [ shipDetails, setShipDetails ] = useState({});
    
    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            clearTimeout(loadingTimer);
            axios.get(`https://api.spacexdata.com/v3/ships/${shipDetailsId}`).then((response) => {
                //console.log(response.data);
                setShipDetails(response.data);
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
                                    <b>Ship Name:</b> {shipDetails.ship_name}<br />
                                    <b>Weight(in Kg):</b> {shipDetails.weight_kg}<br />
                                    <b>Year Build:</b> {shipDetails.year_built}<br />
                                    <Link to="/ships">Back to ships</Link>
                                </Card>
                            </div>
                        }            
                    </React.Fragment>
                )
            }
        </React.Fragment>
    );
}

ShipDetails.propTypes = {
    shipDetailsId: PropTypes.oneOfType([
        PropTypes.string,
    ]),
}

export default ShipDetails;
