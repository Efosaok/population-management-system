import Location from '../controllers/Location';
import { validateLocationCreation, validateUpdateLocation } from '../middlewares/validateRequestBody';

const {
  createLocation,
  updateLocation,
  fetchAllLocations,
  fetchALocation,
  deleteLocation,
} = Location;

export default (app) => {
  app.route('/api/v1/location')
    .post(validateLocationCreation, createLocation)
    .get(fetchAllLocations);
  app.route('/api/v1/location/:id')
    .put(validateUpdateLocation, updateLocation)
    .delete(deleteLocation)
    .get(fetchALocation);
};
