import location from '../models/Location';
import calculateTotal from '../helpers/calculateTotal';
import formatLocationData from '../helpers/formatLocationData';

/**
 *
 *
 * @class Location
 */
class Location {
  static async createLocation({ body }, res) {
    try {
      const formattedLocationData = formatLocationData(body);
      const newLocation = await location.create(formattedLocationData);
      return res.status(201).json({
        message: 'new location created',
        newLocation,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'an error occured',
        error: error.message,
      });
    }
  }

  static async fetchAllLocations(req, res) {
    try {
      const allLocations = await location.find();
      if (allLocations.length === 0) {
        return res.status(404).json({
          message: 'no location found',
        });
      }
      const totalMales = calculateTotal(allLocations, 'malePopulation');
      const totalFemales = calculateTotal(allLocations, 'femalePopulation');
      const totalPopulation = totalFemales + totalMales;
      return res.status(200).json({
        message: 'all locations fetched',
        allLocations,
        totalFemales,
        totalMales,
        totalPopulation,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'an error occured',
        error: error.message,
      });
    }
  }

  static async fetchALocation({ params: { id } }, res) {
    try {
      const singleLocation = await location.findById(id);
      if (!singleLocation) {
        return res.status(404).json({
          message: 'location specified not found',
        });
      }
      return res.status(200).json({
        message: 'location found',
        singleLocation,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'an error occured',
        error: error.message,
      });
    }
  }

  static async updateLocation({ params: { id }, body }, res) {
    try {
      const updatedLocation = await location.findByIdAndUpdate(id, { ...body }, { new: true });
      if (!updatedLocation) {
        return res.status(404).send({
          message: 'specified location does not exist',
        });
      }
      return res.status(200).send({
        message: 'location successfully updated',
        updatedLocation,
      });
    } catch (error) {
      return res.status(500).send({
        message: 'an error occured',
        error: error.message,
      });
    }
  }

  static async deleteLocation({ params: { id } }, res) {
    try {
      await location.findByIdAndDelete(id);
      return res.status(200).send({
        message: 'location successfully deleted',
      });
    } catch (error) {
      return res.status(500).send({
        message: 'an error occured',
        error: error.message,
      });
    }
  }
}

export default Location;
