import React, { Fragment } from 'react'

import './Footer.css'
function Footer() {
    return (
        <Fragment>
            <footer className="footer">
            <div className="foooter__Logo">
                <h4>
                    E-Store
                </h4>
                </div>
                <div className="links">
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Contact Us</a>
                <a href='/'>Social Media</a>
                </div>
                <div className="footer__end">
                    <span>Address</span>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer