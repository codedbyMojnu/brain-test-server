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
            required: true,
        },
        hint: {
            type: [String], // Defines an array of strings
            required: true,
        },
        answer: {
            type: String,
            required: [true, 'An answer is required.'],
            trim: true,
            // It's a best practice to ensure the answer is one of the provided options
            validate: {
                validator: function (value) {
                    // 'this' refers to the document being saved.
                    // The validator checks if the provided answer exists in the options array.
                    return this.options.includes(value);
                },
                message: 'The answer must be one of the provided options.',
            },
        },
        explanation: {
            type: String,
            required: [true, 'An explanation is required to help users learn.'],
            trim: true,
        },
    },
    {
        // Automatically adds `createdAt` and `updatedAt` fields
        timestamps: true,
    }
);

module.exports = mongoose.model('Level', levelSchema);