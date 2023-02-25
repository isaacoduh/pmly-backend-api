const asyncHandler = require('express-async-handler');
const Project = require('../models/project.model');

const getProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find({});
    res.status(200).json(projects);
});

const createProject = asyncHandler(async(req, res) => {
    const {title, description} = req.body;
    if(!title || !description) {
        res.status(400);
        throw new Error("All fields are required!");
    }
    const project = await Project.create({
        title, description
    });

    res.status(201).json(project);
});

module.exports = {getProjects, createProject};