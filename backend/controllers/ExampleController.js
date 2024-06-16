// ExampleController.js
exports.getExample = (req, res) => {
  res.json({ message: 'Example Controller - GET Request' });
};

exports.postExample = (req, res) => {
  const { body } = req;
  res.json({ message: 'Example Controller - POST Request', requestBody: body });
};
