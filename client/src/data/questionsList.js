// export default [
//     {
//         questions: [
//         {
//             question: 'Do you have dander allergies?',
//             answers: [
//                 {
//                     label: 'Apartment (BR)'
//                 },
//                 {
//                     label:'Small/Medium House'
//                 },
//                 {
//                     label:'Lots of space inside!'
//                 }
//             ]
//         },
//         {
//             question: 'Do you have dander allergies?',
//             answers: [
//                 {
//                     label: 'Apartment (BR)'
//                 },
//                 {
//                     label:'Small/Medium House'
//                 },
//                 {
//                     label:'Lots of space inside!'
//                 }
//             ]
//         },
//         {
//             question: 'What is your desired energy level?',
//             answers: [
//                 {
//                     label: 'Sedentary (Calm)'
//                 },
//                 {
//                     label:'Moderate'
//                 },
//                 {
//                     label:'High'
//                 }
//             ]
//         },
//         {
//             question: 'On average, how long are you away from home daily?',
//             answers: [
//                 {
//                     label: 'I work from home'
//                 },
//                 {
//                     label:'Typical 9-5'
//                 },
//                 {
//                     label:'It varies'
//                 }
//             ]
//         },
//         {
//             question: 'Do you hope to cuddle your new pet?',
//             answers: [
//                 {
//                     label: 'Yes'
//                 },
//                 {
//                     label:'Not my priority'
//                 }
//             ]
//         },
//         {
//             question: 'Do you want to pet to be emotionally supportive?',
//             answers: [
//                 {
//                     label:'Yes'
//                 },
//                 {
//                     label:'No'
//                 },
//                 {
//                     label:''
//                 }
//             ]
//         },
//         {
//             question: 'What is your budget like?',
//             answers: [
//                 {
//                     label:'Can spare $100 a month'
//                 },
//                 {
//                     label:'Can spare $300 a month'
//                 },
//                 {
//                     label:'Can spare $500 a month'
//                 }
//             ]
//         },
//         {
//             question: 'Are there small children in the house?',
//             answers: [
//                 {
//                     label: 'Yes'
//                 },
//                 {
//                     label:'No'
//                 }
//             ]
//         }
//     ]
//   }
// ];

const questions = [
    {
        question: 'What is your living space size?',
        answers: [
            { label: 'Apartment (BR)', smallDogPoints: 3, mediumDogPoints: 1, largeDogPoints: 0, catPoints: 1, fishPoints: 1, reptilePoints: 1, birdPoints: 1 },
            { label:'Small/Medium House', smallDogPoints: 1, mediumDogPoints: 1, largeDogPoints: 0, catPoints: 1, fishPoints: 1, reptilePoints: 1, birdPoints: 1 },
            { label:'Lots of space inside!', smallDogPoints: 1, mediumDogPoints: 1, largeDogPoints: 1, catPoints: 1, fishPoints: 1, reptilePoints: 1, birdPoints: 1 }
        ]
    },
    {
        question: 'Do you have dander allergies?',
        answers: [
            { label: 'Yes', smallDogPoints: 1, mediumDogPoints: 0, largeDogPoints: 0, catPoints: 1, fishPoints: 1, reptilePoints: 1, birdPoints: 0 },
            { label:'No', smallDogPoints: 1, mediumDogPoints: 1, largeDogPoints: 1, catPoints: 1, fishPoints: 1, reptilePoints: 1, birdPoints: 1 }
        ]
    },
    {
        question: 'What is your desired energy level?',
        answers: [
            { label: 'Sedentary/Calm', smallDogPoints: 1, mediumDogPoints: 1, largeDogPoints: 1, catPoints: 1, fishPoints: 1, reptilePoints: 1, birdPoints: 1 },
            { label:'Moderate', smallDogPoints: 1, mediumDogPoints: 1, largeDogPoints: 0, catPoints: 0, fishPoints: 0, reptilePoints: 0, birdPoints: 1 },
            { label:'High', smallDogPoints: 0, mediumDogPoints: 0, largeDogPoints: 1, catPoints: 0, fishPoints: 0, reptilePoints: 0, birdPoints: 1 },
        ]
    },
    {
        question: 'On average, how long are you away from home daily?',
        answers: [
            { label: 'I work from home!', smallDogPoints: 1, mediumDogPoints: 1, largeDogPoints: 1, catPoints: 1, fishPoints: 1, reptilePoints: 1, birdPoints: 1 },
            { label:'Typical 9-5', smallDogPoints: 0, mediumDogPoints: 0, largeDogPoints: 0, catPoints: 1, fishPoints: 1, reptilePoints: 1, birdPoints: 0 },
            { label:'It varies', smallDogPoints: 0, mediumDogPoints: 0, largeDogPoints: 0, catPoints: 1, fishPoints: 1, reptilePoints: 1, birdPoints: 0 }
        ]
    },
    {
        question: 'Do you hope to cuddle your new pet?',
        answers: [
            { label: 'Yes', smallDogPoints: 1, mediumDogPoints: 1, largeDogPoints: 1, catPoints: 1, fishPoints: 0, reptilePoints: 0, birdPoints: 0 },
            { label:'No', smallDogPoints: 0, mediumDogPoints: 0, largeDogPoints: 0, catPoints: 0, fishPoints: 1, reptilePoints: 1, birdPoints: 1 }
        ]
    },
    {
        question: 'Do you need emotional support?',
        answers: [
            { label: 'Yes', smallDogPoints: 1, mediumDogPoints: 1, largeDogPoints: 1, catPoints: 1, fishPoints: 0, reptilePoints: 0, birdPoints: 0 },
            { label:'No', smallDogPoints: 0, mediumDogPoints: 0, largeDogPoints: 0, catPoints: 0, fishPoints: 1, reptilePoints: 1, birdPoints: 1 }
        ]
    },
    {
        question: 'What is your budget like?',
        answers: [
            { label: 'Small', smallDogPoints: 1, mediumDogPoints: 0, largeDogPoints: 0, catPoints: 1, fishPoints: 1, reptilePoints: 0, birdPoints: 0 },
            { label:'Medium', smallDogPoints: 1, mediumDogPoints: 1, largeDogPoints: 1, catPoints: 1, fishPoints: 1, reptilePoints: 1, birdPoints: 1 },
            { label:'High (been preparing,  money to spare)', smallDogPoints: 1, mediumDogPoints: 1, largeDogPoints: 1, catPoints: 1, fishPoints: 1, reptilePoints: 1, birdPoints: 1 },
            { label:'No budget (open to exotics)', smallDogPoints: 1, mediumDogPoints: 1, largeDogPoints: 1, catPoints: 1, fishPoints: 1, reptilePoints: 1, birdPoints: 1 }
        ]
    },
    {
        question: 'Are there small children in the home?',
        answers: [
            { label:'Yes', smallDogPoints: 1, mediumDogPoints: 1, largeDogPoints: 1, catPoints: 1, fishPoints: 1, reptilePoints: 1, birdPoints: 1 },
            { label:'No', smallDogPoints: 1, mediumDogPoints: 1, largeDogPoints: 1, catPoints: 1, fishPoints: 1, reptilePoints: 1, birdPoints: 1 }
        ]
    },
];

export default questions;