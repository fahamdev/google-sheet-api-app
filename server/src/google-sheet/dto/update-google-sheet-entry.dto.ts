import { PartialType } from '@nestjs/swagger';
import { CreateGoogleSheetEntryDto } from './create-google-sheet-entry.dto';

export class UpdateGoogleSheetEntryDto extends PartialType(
  CreateGoogleSheetEntryDto,
) {}
