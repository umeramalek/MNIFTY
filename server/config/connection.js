const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://may-admin:EaSaGnNTzc7fo8KM@cluster0.dfopy.mongodb.net/MNIFTYDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;