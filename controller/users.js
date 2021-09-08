exports.getAllUsers = (req, res) => {
  res.send('All User');
};

exports.getUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      user: 'THis is a user',
    },
  });
};

exports.createUser = (req, res) => {
  res.status(201).json({
    status: 'success',
    data: {
      user: 'This is A User',
    },
  });
};

exports.updateUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      user: 'This is An Update User',
    },
  });
};

exports.deleteUser = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
