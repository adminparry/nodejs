import { Controller, Get, Post, UploadedFile, UseInterceptors, UploadedFiles, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, MessagePattern, Client, Transport } from '@nestjs/microservices';
import { FileInterceptor, FilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  // @Client({ transport: Transport.TCP})
  // client: ClientProxy

  @Get()
  getHello(): string {
    return this.appService.getHello();
    
  }
  // @Post()
  // @UseInterceptors(FileInterceptor('file'))
  // test(@UploadedFile() file) {
  //   return this.client.send({ cmd: 'upload.file' }, 1);
  // }
  // 上传单个文件
  // @Post('upload')
  // @MessagePattern({ cmd: 'upload.file' })
  // @UseInterceptors(FileInterceptor('file'))
  // uploadFile(@UploadedFile() file) {
  //   console.log(file);
  // }
  // // 上传多个文件
  // // @Post('uploads')
  // @MessagePattern({ cmd: 'upload.files' })
  // @UseInterceptors(FilesInterceptor('files'))
  // uploadFiles(@UploadedFiles() files) {
  //   console.log(files);
  // }
  // // 上传字段和文件
  // // @Post('uploads')
  // @MessagePattern({ cmd: 'upload.form' })
  // @UseInterceptors(FileFieldsInterceptor([
  //   {
  //     name: 'img',
  //     maxCount: 1,
  //   },
  //   {
  //     name: 'video',
  //     maxCount: 2,
  //   }
  // ]))
  // uploadFilesAndField(@UploadedFiles() files, @Body() body) {
  //   console.log(files, body);
  // }

}
