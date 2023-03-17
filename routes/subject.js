import express from 'express';
import { createSubject, updateSubject, deleteSubject,getSubjects } from '../controllets/Subject.js';

const router = express.Router();

router.post('/create', createSubject);
router.patch('/update/:id', updateSubject);
router.delete('/delete/:id', deleteSubject);
router.get('',getSubjects);

export default router;
