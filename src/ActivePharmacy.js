import React from 'react';

export default ({data, active}) => {
    if (!data || !data[active]) {
        return <h2>Info</h2>
    }

    const pharmacy = data[active];

    return (
        <div className="thumbnail">
            <h3>{pharmacy.caption}</h3>
            <table className="pharmacy-info table table-responsive">
                <tbody>
                    <tr>
                        <td>Caption:</td>
                        <td>{pharmacy.caption}</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>{pharmacy.address}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

