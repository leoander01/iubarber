import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppoitmentService from './CreateAppointmentService';

describe('CreateAppoitment', () => {
    it('should be able to create a new appointment', async() => {
      const fakeAppointmentsRepository =  new FakeAppointmentsRepository();
      const createAppointment = new CreateAppoitmentService(fakeAppointmentsRepository);

      const appointment = await createAppointment.execute({
        date: new Date(),
        provider_id: '123123',
      });

      expect(appointment).toHaveProperty('id');
      expect(appointment.provider_id).toBe('123123');
    });

    it('should not be able to create two appointments on the same time', async() => {
      const fakeAppointmentsRepository =  new FakeAppointmentsRepository();
      const createAppointment = new CreateAppoitmentService(fakeAppointmentsRepository);

      const appointment = await createAppointment.execute({
        date: new Date(),
        provider_id: '123123',
      });

      const appointmentDate = new Date(2021, 3, 4, 11);

      expect(
        createAppointment.execute({
          date: new Date(),
          provider_id: '123123',
        }),
      ).rejects.toBeInstanceOf(AppError);
    });
});