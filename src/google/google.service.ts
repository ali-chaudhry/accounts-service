import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';

@Injectable()
export class GoogleService {
  initializeAnalytics() {
    const scopes = 'https://www.googleapis.com/auth/analytics.readonly';
    const jwt = new google.auth.JWT(
      process.env.CLIENT_EMAIL,
      null,
      process.env.PRIVATE_KEY,
      scopes,
    );
    return { success: true };
  }
}
