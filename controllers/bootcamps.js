// @desc    Get all getBootCamps
// @route   GET /api/v1/getBootcamps
// @access  Public no token required
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps', hello: req.hello});
}

// @desc    Get getBootcamp
// @route   GET /api/v1/getBootCamps/:id
// @access  Public no token required
exports.getBootcamp = (req, res, next) =>{
    res.status(200).json({ success: true, msg: `get bootcamp ${req.params.id}` });
};

// @desc    Create new bootcamp
// @route   POST /api/v1/getBootcamps
// @access  Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Create new bootcamp' });
};
// @desc    Update bootcamp
// @route   PUT/api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
}
// @desc    Delete bootCamp
// @route   DELETE /api/v1/getBootCamps/:id
// @access  Public no token required
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
}