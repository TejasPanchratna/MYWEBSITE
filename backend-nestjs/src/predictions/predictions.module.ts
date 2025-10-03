import { Module } from '@nestjs/common';
import { PredictionsController } from './predictions.controller';
import { PredictionsService } from './predictions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VideoData, VideoDataSchema } from './schemas/video-data.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name: VideoData.name, schema: VideoDataSchema}]),
  ],
  controllers: [PredictionsController],
  providers: [PredictionsService]
})
export class PredictionsModule {}
