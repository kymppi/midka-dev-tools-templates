import { Injectable } from '@nestjs/common';

@Injectable()
export class SERVICENAMEHEREService {
  async getName(): Promise<string> {
    return process.env.INSTANCE_NAME;
  }
}
