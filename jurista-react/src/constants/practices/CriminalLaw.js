import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const criminalLaw = {
    title: 'Criminal Law',
    heading: <h5>What to Expect in a Criminal Case</h5>,
    body: (
        <Fragment>
            <p>
                In the face of criminal charges, the stakes are profoundly high, our goal is to help guide you through this process. 
                Bagga & Associates provides a robust and meticulous defense representation across the full spectrum of criminal offenses, 
                from minor infractions to serious felonies. Our commitment is to protect your rights, ensure fair legal process, and strive for 
                the best possible outcome—whether through negotiation, dismissal, or aggressive litigation in court. We offer clear guidance and 
                unwavering support during this challenging time, focusing on strategic defense tailored to the unique facts of your case.
            </p>
            
            <b>Initial Consultation Documents</b>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Photo Identification</li>
                <li>Prior Criminal Record (if applicable)</li>
                <li>Charging Document</li>
                <li>Appearance Notice/Promise to Appear (PTA)</li>
                <li>Recognizance</li>
                <li>Police Incident/Case Number</li>
                <li>Subpoenas or Warrants</li>
            </ul>
        </Fragment>
    ),

    avatartitle: 'How can Criminal Law help you?',
    avatarlistitem: [
        'Protect your rights and freedom from unfair prosecution',
        'Get expert guidance on the charges against you and the potential consequences',
        'Develop a strong defense strategy to achieve the best possible outcome',
        'Negotiate with prosecutors to reduce charges or penalties',
        'Ensure a fair trial and protect your reputation',
    ]
}

export default criminalLaw