import criminalLaw from './CriminalLaw'
import familyLaw from './FamilyLaw'
import businessLaw from './BusinessLaw'
import immigrationLaw from './ImmigrationLaw'
import realEstateLaw from './RealEstateLaw'
import personalInjury from './PersonalInjury'
import criminalLawImg from '../../images/practice/Criminal_law_pic.png'
import personalInjuryImg from '../../images/practice/Personal_Injury_Law_pic.jpeg'
import realEstateLawImg from '../../images/practice/Real_estate_pic.jpeg'
import immigrationLawImg from '../../images/practice/Immigration_law_pic.jpeg'
import familyLawImg from '../../images/practice/Family_law_pic.jpeg'
import businessLawImg from '../../images/practice/Business_law.jpeg'


const practiceOptions = [
    { 
        id: 1, 
        title: criminalLaw.title, 
        image:criminalLawImg,
        heading: criminalLaw.heading, 
        body: criminalLaw.body, 
        avatartitle: criminalLaw.avatartitle,
        avatarlistitem: criminalLaw.avatarlistitem,
    },
    { 
        id: 2, 
        title: personalInjury.title, 
        image:personalInjuryImg,
        heading: personalInjury.heading, 
        body: personalInjury.body, 
        avatartitle: personalInjury.avatartitle,
        avatarlistitem: personalInjury.avatarlistitem,
    },
    { 
        id: 3, 
        title: familyLaw.title, 
        image:familyLawImg,
        heading: familyLaw.heading, 
        body: familyLaw.body, 
        avatartitle: familyLaw.avatartitle,
        avatarlistitem: familyLaw.avatarlistitem,
    },
    { 
        id: 5, 
        title: realEstateLaw.title, 
        image:realEstateLawImg,
        heading: realEstateLaw.heading, 
        body: realEstateLaw.body, 
        avatartitle: realEstateLaw.avatartitle,
        avatarlistitem: realEstateLaw.avatarlistitem,
    },
    { 
        id: 4, 
        title: immigrationLaw.title, 
        image:immigrationLawImg,
        heading: immigrationLaw.heading, 
        body: immigrationLaw.body, 
        avatartitle: immigrationLaw.avatartitle,
        avatarlistitem: immigrationLaw.avatarlistitem,
    },
    { 
        id: 6, 
        title: businessLaw.title, 
        image:businessLawImg,
        heading: businessLaw.heading, 
        body: businessLaw.body, 
        avatartitle: businessLaw.avatartitle,
        avatarlistitem: businessLaw.avatarlistitem,
    },

]

export default practiceOptions;