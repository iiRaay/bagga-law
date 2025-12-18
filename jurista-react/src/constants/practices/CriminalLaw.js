import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const criminalLaw = {
    title: 'Criminal Law',
    heading: <h3>What to Expect in a Criminal Case</h3>,
    body: (
        <Fragment>
            <p>
                In the face of criminal charges, the stakes are profoundly high, our goal is to help guide you through this process. 
                Bagga & Associates provides a robust and meticulous defense representation across the full spectrum of criminal offenses, 
                from minor infractions to serious felonies. Our commitment is to protect your rights, ensure fair legal process, and strive for 
                the best possible outcome—whether through negotiation, dismissal, or aggressive litigation in court. We offer clear guidance and 
                unwavering support during this challenging time, focusing on strategic defense tailored to the unique facts of your case.
            </p>
        </Fragment>
    ),

    avatartitle: 'Initial Consultation Documents',
    avatarlistitem: [
        'Photo Identification',
        'Prior Criminal Record (if applicable)',
        'Charging Document',
        'Appearance Notice/Promise to Appear (PTA)',
        'Recognizance',
        'Police Incident/Case Number',
        'Subpoenas or Warrants',
    ]
}

export default criminalLaw