import express from 'express';
import router from 'router.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the router
router(app);

// Start the server
app.listen(3000, () => {
    console.log('Server running');
});
