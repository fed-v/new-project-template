/**
 * Constants
 */

"use strict";

export const SITE_NAME = "Website Title";

export const COMPANY_ADDRESS = {
    address: "First Canadian Place, Toronto, ON",
    phone: "(647) 555-5555",
    latitude: 43.6488906,
    longitude: -79.3830613
};

export const SOCIAL_MEDIA = [
    {
        name: "Facebook",
        link: "https://facebook.com",
        icon: "facebook",
        class: "icon facebook"
    },
    {
        name: "Twitter",
        link: "https://twitter.com",
        icon: "twitter",
        class: "icon twitter"
    },
    {
        name: "Google",
        link: "https://google.com",
        icon: "google",
        class: "icon google"
    },
    {
        name: "Instagram",
        link: "https://instagram.com",
        icon: "instagram",
        class: "icon instagram"
    }
];

export const ICONS_LIST = [
    {
        name: "Company 1",
        url: "https://companyurl.com",
        icon: "instagramType"
    },
    {
        name: "Company 2",
        url: "https://companyurl.com",
        icon: "mparticle"
    },
    {
        name: "Company 3",
        url: "https://companyurl.com",
        icon: "wire"
    },
    {
        name: "Company 4",
        url: "https://companyurl.com",
        icon: "stylus"
    },
    {
        name: "Company 5",
        url: "https://companyurl.com",
        icon: "ibm"
    },
    {
        name: "Company 6",
        url: "https://companyurl.com",
        icon: "netuitive"
    }
];

export const FEATURES_LIST = [
    {
        title: "Feature",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        icon: "abacus"
    },
    {
        title: "Feature",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        icon: "tower"
    },
    {
        title: "Feature",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        icon: "lock"
    }
];

export const API_KEYS = {
    googleMaps: "AIzaSyBD1LtBORL5IyarV0COsUULBcUZ5YDPpLk"
};

export const CONTACT_FORM_LIST = {
    id: "contactForm",
    action: "includes/contactForm.php",
    fields: [
        {
            type: "text",
            label: "Full name",
            name: "fullName",
            required: true,
            placeholder: ""
        },
        {
            type: "email",
            label: "Email",
            name: "email",
            required: true,
            placeholder: ""
        }
    ]
};