const asyncHandler = require('express-async-handler')

// Get goals 
// @route GET /application/goals 
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Set goals'
    })
})

// Set goal 
// @route POST /application/goals 
// @access Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a goal')
    }
    

    res.status(200).json({
        message: `Update goals ${req.params.id}`
    })
})

// Update goal 
// @route PUT /application/goals 
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Update goal ${req.params.id}`
    })
})

// Delete goal
// @route DELETE /application/goals 
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Delete goal ${req.params.id}`
    })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}