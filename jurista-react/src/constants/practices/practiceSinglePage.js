import criminalLaw from './CriminalLaw'
import familyLaw from './FamilyLaw'
import businessLaw from './BusinessLaw'
import immigrationLaw from './ImmigrationLaw'
import realEstateLaw from './RealEstateLaw'
import personalInjury from './PersonalInjury'


const practiceOptions = [
    { 
        id: 1, 
        title: criminalLaw.title, 
        heading: criminalLaw.heading, 
        body: criminalLaw.body, 
        avatartitle: criminalLaw.avatartitle,
        avatarlistitem: criminalLaw.avatarlistitem,
    },
    { 
        id: 2, 
        title: personalInjury.title, 
        heading: personalInjury.heading, 
        body: personalInjury.body, 
        avatartitle: personalInjury.avatartitle,
        avatarlistitem: personalInjury.avatarlistitem,
    },
    { 
        id: 3, 
        title: familyLaw.title, 
        heading: familyLaw.heading, 
        body: familyLaw.body, 
        avatartitle: familyLaw.avatartitle,
        avatarlistitem: familyLaw.avatarlistitem,
    },
    { 
        id: 5, 
        title: realEstateLaw.title, 
        heading: realEstateLaw.heading, 
        body: realEstateLaw.body, 
        avatartitle: realEstateLaw.avatartitle,
        avatarlistitem: realEstateLaw.avatarlistitem,
    },
    { 
        id: 4, 
        title: immigrationLaw.title, 
        heading: immigrationLaw.heading, 
        body: immigrationLaw.body, 
        avatartitle: immigrationLaw.avatartitle,
        avatarlistitem: immigrationLaw.avatarlistitem,
    },
    { 
        id: 6, 
        title: businessLaw.title, 
        heading: businessLaw.heading, 
        body: businessLaw.body, 
        avatartitle: businessLaw.avatartitle,
        avatarlistitem: businessLaw.avatarlistitem,
    },

]

export default practiceOptions;