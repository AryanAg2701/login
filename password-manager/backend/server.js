const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const passwordRoutes = require('./routes/passwords');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/password_manager', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/auth', authRoutes);
app.use('/api/passwords', passwordRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
