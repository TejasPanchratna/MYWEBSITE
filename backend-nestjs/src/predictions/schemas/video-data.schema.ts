import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class VideoData extends Document {
  // --- Raw User Inputs ---
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  category_id: number;

  @Prop({ required: true, default: 0 })
  duration_in_minutes: number;

  @Prop({ required: true, default: 0 })
  subscriber_count: number;

  @Prop({ required: true, default: 0 })
  channel_video_count: number;

  @Prop({ required: true, default: 0 })
  channel_view_count: number;

  @Prop({ required: true, default: 0 })
  channel_age_days: number;
  
  @Prop({ required: true, default: 12 })
  publish_hour: number;

  @Prop({ required: true, default: 3 }) // e.g., Wednesday
  publish_day_of_week: number;
}

export const VideoDataSchema = SchemaFactory.createForClass(VideoData);