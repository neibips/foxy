import React from 'react';
import twitter from '../Assets/pics/twitter.png';
import discord from '../Assets/pics/discord.png';


const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="links">
                    <div className="vl" />
                    <img src={twitter} alt="twitter"/>
                    <div className="vl" />
                    <img src={discord} alt="discord"/>
                    <div className="vl" />
                    <p>Mint date: TBA</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
