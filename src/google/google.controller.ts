import { Controller, Post } from '@nestjs/common';
import { GoogleService } from './google.service';

@Controller('google')
export class GoogleController {
  constructor(private readonly googleService: GoogleService) {}

  @Post('initialize/analytics')
  initializeAnalystics() {
    return this.googleService.initializeAnalytics();
  }
}
