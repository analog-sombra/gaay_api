import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class FeedbackService {
  constructor(private readonly prisma: PrismaService) {}

  async createFeedback(createFeedbackInput: CreateFeedbackInput) {
    try {
      const feedback_data = await this.prisma.feedback.create({
        data: {
          description: createFeedbackInput.description,
          suggestion: createFeedbackInput.suggestion,
          happy: createFeedbackInput.happy,
          status: createFeedbackInput.status,
          createdById: createFeedbackInput.createdById,
        },
      });
      if (!feedback_data) {
        throw new BadGatewayException('Feedback not created');
      }
      return feedback_data;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
