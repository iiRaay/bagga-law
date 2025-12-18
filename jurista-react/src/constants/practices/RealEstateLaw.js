import React, { Fragment } from 'react'
const realEstateLaw = {
    title: 'Real Estate Law',
    heading: <h3>What to Expect in a Real Estate Transaction</h3>,
    body: (
        <Fragment>
            <p>
                Whether you are buying your first home, selling a commercial property, or refinancing, a smooth transaction process is paramount. 
                Bagga & Associates offers comprehensive legal support for all residential and commercial real estate transactions. Our services cover everything 
                from drafting and reviewing agreements of purchase, to conducting thorough due diligence and managing the final closing process of a sale.
                We ensure all legal requirements are met, potential disputes are avoided, and your investment is protected. 
                Our guidance begins from the initial offer, all the way to the final transfer of the title.
            </p>
            <b>Initial Consultation Documents</b>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>The Agreement of Purchase and Sale (APS)</li>
                <li>Photo ID for all purchasers/sellers.</li>
                <li>Property Address and Legal Description.</li>
                <li>Sponsor/Employer Details</li>
            </ul>

            <b>For Sellers Only</b>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Existing mortgage statement</li>
                <li>Rental agreements</li>
            </ul>
        </Fragment>
    ),

    avatartitle: 'How can Real Estate Law help you?',
    avatarlistitem: [
        'Protect your rights and interests in real estate transactions',
        'Get expert guidance on real estate laws and regulations',
        'Negotiate and draft contracts that benefit your real estate goals',
        'Ensure compliance with zoning and land-use regulations',
        'Resolve disputes and litigate real estate matters',
    ]
}

export default realEstateLaw