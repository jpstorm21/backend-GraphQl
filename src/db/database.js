import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/appPreu', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Db is connected'))
  .catch(err => console.log(err));