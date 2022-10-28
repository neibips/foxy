import React from 'react';
import Layout from "../Components/Layout";
import pfp from "../Assets/pics/pfp.jpg"
import pfp2 from "../Assets/pics/pfp2.jpg"
import pfp3 from "../Assets/pics/pfp3.jpg"

const Team = () => {

    const team = [
        'Dezz',
        'Ygoy',
        'Liocel'
    ];
    const arrPfp = [
        pfp,
        pfp2,
        pfp3
    ];
    const teamDescription = [
        'An experienced brand strategy, innovation and business team leader. \n' +
        '\n' +
        '6+ years developing & leading high impact teams across Europe & Asia.\n' +
        '\n' +
        'Passionate about in-depth & continuous consumer understanding and leveraging disruptive innovation to elevate brand & business results',
        '<p>3 years in programming. 2 of them in blockchain development. Creating the best products for industry. Every time looking for new development approaches to bring innovation in this world</p>',
        'Experienced nft collector. 2 years in the nft space. Discord developer and 3 years frontend developer. have a good connection in the nft space',
    ];

    return(
        <Layout>
            <div>
                <div className="teamContainer">
                    {team.map((mate, i) => {
                        return(
                            <div className='teamEl'>
                                <div >
                                    <img className="teamImage" src={arrPfp[i]} alt=""/>
                                </div>
                                <div className="teamDescription">
                                    <h1>{mate}</h1>
                                    <p>{teamDescription[i]}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default Team;
