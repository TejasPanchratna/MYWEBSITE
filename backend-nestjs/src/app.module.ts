// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PredictionsModule } from './predictions/predictions.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // This loads your .env file
    MongooseModule.forRoot(process.env.MONGO_URI), // Connects to the database
    PredictionsModule, // Import our new predictions feature
  ],
})
export class AppModule {}