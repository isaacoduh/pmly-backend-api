const express = require('express');
const router = express.Router();

const {getProjects, createProject} = require('../controllers/project.controller');

router.route("/").get(getProjects).post(createProject);

module.exports = router;