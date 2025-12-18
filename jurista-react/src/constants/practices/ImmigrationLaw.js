import React, { Fragment } from 'react'

const immigrationLaw = {
    title: 'Immigration Law',
    heading: <h3>What to Expect in an Immigration Case</h3>,
    body: (
        <Fragment>
            <p>
                Navigating the complexities of immigration is a daunting process. 
                Bagga & Associates aims to make that process simpler for you. Our firm provides dedicated legal assistance to individuals, 
                families, and businesses seeking to live, work, or establish residency here within Canada. We assist with applications for permanent residence, 
                various visa categories(work, student, and visitor), citizenship applications, and family sponsorship. We stay up to date on evolving immigration 
                policies to ensure your application is prepared accurately and strategically, in order to minimize delays and maximize the chances of a successful 
                migration.
            </p>

            <b>Initial Consultation Documents</b>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Valid Passport(s)</li>
                <li>Visa/Permit's </li>
                <li>Education and Employment Records</li>
                <li>Sponsor/Employer Details</li>
            </ul>
        </Fragment>
    ),

    avatartitle: 'How can Immigration Law help you?',
    avatarlistitem: [
        'Get expert guidance on visa applications and green card processes',
        'Protect your rights and interests in immigration proceedings',
        'Ensure a smooth and efficient citizenship process',
        'Negotiate with immigration authorities to resolve issues',
        'Stay up-to-date on changing immigration laws and regulations',
    ]
}

export default immigrationLaw   


