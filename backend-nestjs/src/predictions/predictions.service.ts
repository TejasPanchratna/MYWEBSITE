import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VideoData } from './schemas/video-data.schema';
import axios from 'axios'; // Import axios

@Injectable()
export class PredictionsService {
  constructor(@InjectModel(VideoData.name) private videoDataModel: Model<VideoData>) {}

  // This function now returns a promise of 'any' because the final result is from the ML model
  async createAndPredict(createPredictionDto: any): Promise<any> {
    // --- Step 1: Save the raw data to our database ---
    const createdPrediction = new this.videoDataModel(createPredictionDto);
    await createdPrediction.save();
    console.log('Data saved to MongoDB successfully.');

    // --- Step 2: Call the FastAPI ML model for a prediction ---
    try {
      console.log('Sending data to FastAPI for prediction...');
      // Make a POST request to your running Python server
      const mlResponse = await axios.post('http://127.0.0.1:8000/predict', createPredictionDto);

      console.log('Prediction received from FastAPI:', mlResponse.data);
      // Return the prediction from the ML model
      return mlResponse.data;

    } catch (error) {
      console.error('Error calling FastAPI:', error.message);
      // If the ML service fails, return a friendly error message
      return { error: 'Could not get a prediction from the ML service.' };
    }
  }

  async findAll(): Promise<VideoData[]> {
    return this.videoDataModel.find().exec();
  }
}