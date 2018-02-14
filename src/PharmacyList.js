import React from 'react';
import PharmacyData from './PharmacyData';

export default ({data, update}) => {
    if (!data) {return (<p>Loading...</p>);}

    const pharmacies = data.map((pharmacy, index) => {
        return (<PharmacyData pharmacy={pharmacy} index={index} key={`pharmacy - ${index}`} update={update}/>);
    });

    return (
        <table className="pharmacy-list table table-stripped">
            <thead>
                <tr>
                    <th>Caption</th>
                    <th>Address</th>
                </tr>
            </thead>

            <tbody>
                {pharmacies}
            </tbody>
        </table>
    )
}
