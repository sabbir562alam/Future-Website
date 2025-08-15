const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('pages/home', { title: 'Home' }));
router.get('/about', (req, res) => res.render('pages/about', { title: 'About Us' }));
router.get('/services', (req, res) => res.render('pages/services', { title: 'Our Services' }));
router.get('/contact', (req, res) => res.render('pages/contact', { title: 'Contact Us' }));

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).send('All fields are required.');
  }
  console.log('Contact form submitted:', { name, email, message });
  res.send('Thank you for contacting us!');
});

module.exports = router;