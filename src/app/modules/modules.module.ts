import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { NetflixModule } from './netflix/netflix.module';

@NgModule({
  imports: [AuthModule, NetflixModule],
})
export class ModulesModule {}
