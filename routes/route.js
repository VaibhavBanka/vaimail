import express from 'express';
import { saveSendEmails,getEmails, toggleStarredEmail, deleteEmails, moveEmailsToBin } from '../contoller/email-contoller.js';


const routes = express.Router();

routes.post('/save', saveSendEmails);
routes.get('/emails/:type',getEmails)
routes.post('/save-draft',saveSendEmails);
routes.post('/starred',toggleStarredEmail);
routes.delete('/delete',deleteEmails);
routes.post('/bin',moveEmailsToBin);

export default routes;