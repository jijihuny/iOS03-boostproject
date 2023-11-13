import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, IsUrl } from 'class-validator';

export class UserProfileSimpleResponse {
  @ApiProperty({ description: '작성자 email' })
  @IsEmail()
  userId: string;

  @ApiProperty({ description: '작성자 이름' })
  @IsString()
  name: string;

  @ApiProperty({ description: '프로필 사진 url', required: false })
  @IsUrl()
  @IsOptional()
  imageUrl?: string;
}
