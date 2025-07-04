/* eslint-disable */
const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: [true, 'Question text cannot be empty.'],
            trim: true, // Removes unnecessary whitespace from the beginning and end
        },
        options: {
            type: [String], // Defines an array of strings
            default: [], // Default to empty array
            trim: true,
        },
        hint: {
            type: String, // Defines an array of strings
            required: true,
        },
        answer: {
            type: String,
            required: [true, 'An answer is required.'],
            trim: true,
        },
        explanation: {
            type: String,
            required: [true, 'An explanation is required to help users learn.'],
            trim: true,
        },
        category: {
            type: String,
            enum: [
                'JAVASCRIPT',
                'TYPESCRIPT',
                'HTML',
                'CSS',
                'TAILWIND CSS',
                'SASS',
                'LESS',
                'REACT',
                'CONTEXT API',
                'REDUX',
                'RTK QUERY',
                'ZUSTAND',
                'RECOIL',
                'FRAMER MOTION',
                'REACT TESTING LIBRARY',
                'STORYBOOK',
                'NEXT.JS',
                'SERVER COMPONENTS',
                'SSG & SSR',
                'ISR',
                'AUTHENTICATION',
                'NEXTAUTH.JS',
                'SEO OPTIMIZATION',
                'PWA',
                'WEB VITALS & ANALYTICS',
                'VITE',
                'WEBPACK',
                'BABEL',
                'ESLINT',
                'PRETTIER',
                'NPM',
                'YARN',
                'GIT',
                'CI/CD',
                'VERCEL',
                'NETLIFY',
                'AXIOS',
                'BROWSER API',
                'GRAPHQL',
                'APOLLO CLIENT',
                'CHAKRA UI',
                'MATERIAL UI',
                'FIGMA',
                'UI/UX DESIGN'
            ],
            default: 'JAVASCRIPT',
            required: true
        },
    },
    {
        // Automatically adds `createdAt` and `updatedAt` fields
        timestamps: true,
    }
);

module.exports = mongoose.model('Level', levelSchema);