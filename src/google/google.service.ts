import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';

@Injectable()
export class GoogleService {
  initializeAnalytics() {
    const credenticals = { clientEmail: 'alianwar', clientSecret: '21213' };
    const scopes = 'https://www.googleapis.com/auth/analytics.readonly';
    console.log('credentials', credenticals);
    const jwt = new google.auth.JWT(
      credenticals.clientEmail,
      null,
      credenticals.clientSecret,
      scopes,
    );

    return { success: true, jwt };
  }
}
