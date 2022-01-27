import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateGoogleSheetEntryDto {
  @IsString()
  @MinLength(3, { message: 'Name must be at least 3 characters long' })
  readonly name: string;

  @IsEmail({}, { message: 'Email is not valid' })
  readonly email: string;
}
