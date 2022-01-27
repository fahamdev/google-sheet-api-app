import { Injectable } from '@nestjs/common';
import { CreateGoogleSheetEntryDto } from './dto/create-google-sheet-entry.dto';
import { google } from 'googleapis';
import { ConfigService } from '@nestjs/config';

const auth = new google.auth.GoogleAuth({
  keyFile: 'credentials.json',
  scopes: 'https://www.googleapis.com/auth/spreadsheets',
});
const range = 'Sheet1!A2:C';

@Injectable()
export class GoogleSheetService {
  constructor(private readonly configService: ConfigService) {}
  async create(createGoogleSheetDto: CreateGoogleSheetEntryDto) {
    const googleSheet = await this.getAuthenticatedGoogleSheet();
    const newEntry = await googleSheet.spreadsheets.values.append({
      spreadsheetId: this.configService.get<string>('spreadsheetId'),
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            createGoogleSheetDto.name,
            createGoogleSheetDto.email,
            new Date().toLocaleString(),
          ],
        ],
      },
    });
    return newEntry.config.data.values;
  }

  async findAll() {
    const googleSheet = await this.getAuthenticatedGoogleSheet();
    const sheetData = await googleSheet.spreadsheets.values.get({
      spreadsheetId: this.configService.get<string>('spreadsheetId'),
      range,
    });
    const entries = sheetData.data.values;
    return entries;
  }

  async getAuthenticatedGoogleSheet() {
    const client = await auth.getClient();
    return google.sheets({ version: 'v4', auth: client });
  }
}
