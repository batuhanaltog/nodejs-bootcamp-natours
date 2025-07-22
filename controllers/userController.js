exports.getAllUsers = (req, res) => {
    res.status(200).json({
      status: 'success',
      data: {
        users: []
      }
    })
}
exports.getUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
        user: []
        }
    })
}
exports.createUser = (req, res) => {
    res.status(200).json({
      status: 'success',
      data: {
        user: []
      }
    })
}
exports.updateUser = (req, res) => {
    res.status(200).json({
      status: 'success',
      data: {
        user: []
      }
    })
}
exports.deleteUser = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    })
}