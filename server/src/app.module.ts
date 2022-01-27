import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from './common/schema/config.schema';
import { GoogleSheetModule } from './google-sheet/google-sheet.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: configValidationSchema,
    }),
    GoogleSheetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
