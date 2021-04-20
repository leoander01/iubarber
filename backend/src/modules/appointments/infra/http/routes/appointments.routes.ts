import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppoinmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();
const appoinmentsController = new AppoinmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

// SoC: Separation of Concerns (Separação de preocupações).
// DTO - Data Transfer Object

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appoinmentsController.create);
appointmentsRouter.get('/me', providerAppointmentsController.index);

export default appointmentsRouter;
