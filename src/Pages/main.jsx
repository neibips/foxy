import React from 'react';
import Layout from '../Components/Layout'
import pfp from '../Assets/pics/pfp.jpg'


const Main = () => {
    return(
        <Layout>
            <div className='main'>
                <div className="textbox">
                    <h1 className='foxyHeader'>Welcome to the Foxies City</h1>
                    <br/>
                    <br/>
                    <p>Foxy was inspired by the brightly colored foxes.
                        We are here to share the brightest moments of life with you.
                        <br/>
                        <br/>
                        Foxy is a new, modern brand on the $Aptos blockchain. We have come to create and there is a lot of interesting things ahead of you.
                        We are both web2 and web3 oriented, so don't be surprised to see cute jungle fox merch at your door.
                        <br/>
                        <br/>
                        We are also developing new features for $aptos which you will be available to use.
                        <br/>
                        <br/>
                        We will not reveal all the cards at once, a huge adventure awaits us!
                        <br/>
                    </p>
                    <button>Read more</button>
                </div>

                <div className="imageMain">
                    <img src={pfp} alt=""/>
                </div>
            </div>
        </Layout>
    )
}

export default Main;
