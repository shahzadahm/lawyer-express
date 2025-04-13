const Service = require('../models/service');

const getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        return res.status(200).json(services);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error fetching services' });
    }
};

const saveAllServices = async (req, res) => {
    try {
        const services = [
            {
                name: 'Property Legal Advice',
                description: 'Consultation on property disputes, contracts, and agreements.',
                price: 200,
            },
            {
                name: 'Divorce Legal Services',
                description: 'Legal services related to divorce settlements and custody issues.',
                price: 300,
            },
            {
                name: 'Corporate Law Consultation',
                description: 'Services for corporate legal matters such as mergers, acquisitions, and intellectual property.',
                price: 500,
            },
            {
                name: 'Criminal Defense',
                description: 'Legal defense services for individuals facing criminal charges.',
                price: 700,
            },
            {
                name: 'Family Law',
                description: 'Legal services related to family matters including adoption, custody, and divorce.',
                price: 250,
            },
        ];

        const result = await Service.insertMany(services); // Insert multiple services into the database
        res.status(201).json({ message: 'Dummy services added successfully', result });
    } catch (error) {
        res.status(500).json({ message: 'Error adding dummy services', error });
    }
};

module.exports = { getAllServices, saveAllServices };
