import React from 'react';

export default ({pharmacy, update, index}) => {
    return (
        <tr onClick={() => update({active: index})}>
            <td>{pharmacy.caption}</td>
            <td>{pharmacy.address}</td>
        </tr>
    )
}