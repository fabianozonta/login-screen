const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('public'));

// Conectar ao MongoDB (substitua a URL pela sua)
mongoose.connect('mongodb://localhost/loginapp', { useNewUrlParser: true, useUnifiedTopology: true });

// Modelo de usuário
const User = mongoose.model('User', {
  name: String,
  email: String,
  password: String
});


// Rota para cadastro
app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).send('Usuário cadastrado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao cadastrar usuário');
  }
});

// Rota para login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('Usuário não encontrado');
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send('Senha inválida');
    }
    const token = jwt.sign({ _id: user._id }, 'secretkey');
    res.json({ token });
  } catch (error) {
    res.status(500).send('Erro ao fazer login');
  }
});

// Rota para página de sucesso
app.get('/success', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'success.html'));
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));