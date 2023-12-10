import { advancedIcon, arcadeIcon, proIcon } from "../assets";

export const content = {
    buttons: [ "Go Back", "Next Step", 'Confirm' ],
    first: {
        name: 'Personal info',
        desc: 'Please provide your name, email address, and phone number.',
        form: [
            {
                label: "Name",
                placeholder: "e.g. Stephen King"
            },
            {
                label: "Email Address",
                placeholder: "e.g. stephenking@lorem.com"
            },
            {
                label: "Phone Number",
                placeholder: "e.g. +1 234 567 890"
            }
        ]
    },
    second: {
        name: "Select your plan",
        desc: 'You have the option of monthly or yearly billing.',
        bonus: '2 months free',
        types: [
            {
                plan: 'Arcade',
                icon: arcadeIcon,
                pricing: {
                    monthly: '$9/mo',
                    yearly: '$90/yr',
                },
                value: {
                    monthly: 9,
                    yearly: 90
                }
            },
            {
                plan: 'Advanced',
                icon: advancedIcon,
                pricing: {
                    monthly: '$12/mo',
                    yearly: '$120/yr'
                },
                value: {
                    monthly: 12,
                    yearly: 120
                }
            },
            {
                plan: 'Pro',
                icon: proIcon,
                pricing: {
                    monthly: '$15/mo',
                    yearly: '$150/yr'
                },
                value: {
                    monthly: 15,
                    yearly: 150
                }
            }
        ],
        switch: [ "Monthly", "Yearly" ]
    },
    third: {
        name: 'Pick add-ons',
        desc: 'Add-ons help enhance your gaming experience.',
        types: [
            {
                title: 'Online service',
                desc: 'Access to multiplayer games',
                pricing: {
                    monthly: '+$1/mo',
                    yearly: '+$10/yr'
                },
                value: {
                    monthly: 1,
                    yearly: 10
                }
            },
            {
                title: 'Larger storage',
                desc: 'Extra 1TB of cloud save',
                pricing: {
                    monthly: '+$2/mo',
                    yearly: '+$20/yr'
                },
                value: {
                    monthly: 2,
                    yearly: 20
                }
            },
            {
                title: 'Customizable Profile',
                desc: 'Custom theme on your profile',
                pricing: {
                    monthly: '+$2/mo',
                    yearly: '+$20/yr'
                },
                value: {
                    monthly: 2,
                    yearly: 20
                }
            }
        ]
    },
    fourth: {
        name: 'Finishing up',
        desc: 'Double-check everything looks OK before confirming.'
    },
    final : {
        name: 'Thank you!',
        desc: 'Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.'
    }
}