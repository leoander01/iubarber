import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppoinmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();
const appoinmentsController = new AppoinmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

// SoC: Separation of Concerns (Separação de preocupações).
// DTO - Data Transfer Object

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', celebrate({
  [Segments.BODY]: {
    provider_id: Joi.string().uuid().required,
    date: Joi.date()
  }
}), appoinmentsController.create);

appointmentsRouter.get('/me', providerAppointmentsController.index);

export default appointmentsRouter;
