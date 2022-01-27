import { Controller, Get, Post, Body } from '@nestjs/common';
import { GoogleSheetService } from './google-sheet.service';
import { CreateGoogleSheetEntryDto } from './dto/create-google-sheet-entry.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('google-sheet')
@ApiTags('Google Sheet')
export class GoogleSheetController {
  constructor(private readonly googleSheetService: GoogleSheetService) {}

  @Post()
  create(@Body() createGoogleSheetDto: CreateGoogleSheetEntryDto) {
    return this.googleSheetService.create(createGoogleSheetDto);
  }

  @Get()
  findAll() {
    return this.googleSheetService.findAll();
  }
}
