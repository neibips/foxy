import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const Header = ({isOpen, OnClick}) => {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    // const [canShow, setCanShow] = useState(true)

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        console.log(windowDimensions)
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <div className="header" >
                <div className="logo">
                    <h1>Aptos Foxy</h1>
                </div>

                {windowDimensions.width < 981 ?
                    <div className="d-block d-md-none" >
                        {(isOpen && (
                            <svg
                                onClick={OnClick}
                                stroke="#e3c69c"
                                fill="#e3c69c"
                                stroke-width="0"
                                viewBox="0 0 352 512"
                                height="2.5em"
                                width="2.5em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                            </svg>
                        )) || (
                            <svg
                                onClick={OnClick}
                                stroke="#e3c69c"
                                fill="#e3c69c"
                                stroke-width="0"
                                viewBox="0 0 512 512"
                                height="2.5em"
                                width="2.5em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                            </svg>
                        )}
                    </div>
                    :
                    <nav className="nav">

                        <Link
                            to={'/team'}
                            smooth={true}
                            duration={600}
                            key={1}>
                            <p>Team</p>
                        </Link>
                        <p>/</p>

                        <Link  to={'/roadmap'} key={2}>
                            <p>Roadmap</p>
                        </Link>
                        <p>/</p>
                        <Link
                            to={'/quest'}
                            key={3}>
                            <p>Quest</p>
                        </Link>
                        <p>/</p>
                        <Link
                            to={'/whitepaper'}
                            key={4}>
                            <p>Whitepaper</p>
                        </Link>
                    </nav>
                }
            </div>
        </div>
    )
}

export default Header;
