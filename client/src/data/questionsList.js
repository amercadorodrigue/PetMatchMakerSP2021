const questions = [
    {
        question: 'What is your living space size?',
        topic: 'space',
        answers: [
            { label: 'Apartment (BR)', value: 1 },
            { label:'Small/Medium House', value: 3 },
            { label:'Lots of space inside!', value: 5 }
        ]
    },
    {
        question: 'What is your desired animal size?',
        topic: 'size',
        answers: [
            { label: 'Small', value: 1 },
            { label:'Medium', value: 3 },
            { label:'Large', value: 5 }
        ]
    },
    {
        question: 'Do you have dander allergies?',
        topic: 'allergies',
        answers: [
            { label: 'Yes', value: true },
            { label:'No', value: false }
        ]
    },
    {
        question: 'What is your desired energy level?',
        topic: 'energy',
        answers: [
            { label: 'Sedentary/Calm', value: 1 },
            { label:'Moderate', value: 3 },
            { label:'High', value: 5 },
        ]
    },
    {
        question: 'On average, how long are you away from home daily?',
        topic: 'attention',
        answers: [
            { label: 'I work from home!', value: 1 },
            { label:'Typical 9-5', value: 3 },
            { label:'It varies', value: 5 }
        ]
    },
    {
        question: 'Do you hope to cuddle your new pet?',
        topic: 'cuddle',
        answers: [
            { label: 'Yes', value: true },
            { label:'No', value: false }
        ]
    },
    {
        question: 'Do you need emotional support?',
        topic: 'emotional support',
        answers: [
            { label: 'Yes', value: true },
            { label:'No', value: false }
        ]
    },
    {
        question: 'What is your budget like?',
        topic: 'budget',
        answers: [
            { label: 'Small', value: 1 },
            { label:'Medium', value: 3 },
            { label:'High (been preparing,  money to spare)', value: 5 },
            { label:'No budget (open to exotics)', value: 7 }
        ]
    },
    {
        question: 'Are there small children in the home?',
        topic: 'small children',
        answers: [
            { label:'Yes', value: true },
            { label:'No', value: false }
        ]
    },
];

export default questions;