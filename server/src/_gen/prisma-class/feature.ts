import {ApiProperty} from '@nestjs/swagger';

export class Feature {
  @ApiProperty({type: String})
  name: string;

  @ApiProperty({type: Boolean})
  enabled: boolean;
}
