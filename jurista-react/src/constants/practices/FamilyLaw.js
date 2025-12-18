import React, { Fragment } from 'react'
const familyLaw = {
    title: 'Family Law',
    heading: <h3>What to Expect in a Family Law Case</h3>,
    body: (
        <Fragment>
            <p>
                Family matters require both legal acuity and compassionate counsel. 
                Bagga & Associates offers sensitive and effective legal representation for the full scope of family law litigation. 
                We guide clients through complex emotional transitions with discretion and professionalism. 
                Our services include divorce and separation, child custody and access disputes, spousal and child support, and the division of marital property.
                We prioritize amicable resolutions where possible, 
                but we are fully prepared to take full legal action towards affirming your parental rights and financial future.
            </p>

            <b>Initial Consultation Documents</b>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Any existing court orders</li>
                <li>Any existing agreements</li>
                <li>Financial Disclosure Records</li>
                <li>Property Information</li>
                <li>Children's Details (If Applicable)</li>
            </ul>
        </Fragment>
    ),

    avatartitle: 'How can Family Law help you?',
    avatarlistitem: [
        'Protect your rights and interests in divorce or separation',
        'Ensure fair child custody and visitation arrangements',
        'Get expert guidance on child support and spousal support',
        'Negotiate a fair and reasonable divorce settlement',
        'Protect your assets and property in a divorce',
    ]
}

export default familyLaw