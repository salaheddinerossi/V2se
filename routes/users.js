import express from 'express';
import { createAccount, getUsers ,deleteUser,updateUser } from '../controllets/users.js';

const router = express.Router();
router.post('/create',createAccount);
router.get('/', getUsers)
router.delete('/delete/:id', deleteUser);
router.patch('/update', updateUser);


export default router;
