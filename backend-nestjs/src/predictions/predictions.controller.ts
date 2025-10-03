import { Controller, Get, Post, Body } from '@nestjs/common';
import { PredictionsService } from './predictions.service';

@Controller('api/predictions')
export class PredictionsController {
  constructor(private readonly predictionsService: PredictionsService) {}

  @Get()
  async findAll() {
    return this.predictionsService.findAll();
  }

  @Post()
  async create(@Body() createPredictionDto: any) {
    console.log('Data received by NestJS:', createPredictionDto);
    // Call the new function that both saves and predicts
    return this.predictionsService.createAndPredict(createPredictionDto);
  }
}