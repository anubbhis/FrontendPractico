import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { NestFactory } from '@nestjs/core';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

