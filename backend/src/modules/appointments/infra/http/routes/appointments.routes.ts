import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppoinmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appoinmentsController = new AppoinmentsController();

// SoC: Separation of Concerns (Separação de preocupações).
// DTO - Data Transfer Object

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appoinmentsController.create);

export default appointmentsRouter;
