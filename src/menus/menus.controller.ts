import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @Post()
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menusService.create(createMenuDto);
  }

  @Get()
  findAll() {
    return this.menusService.findAll();
  }

  // 비교를 위한 main.ts의 ValidationPipe() 의 transform: true 하기전 코드
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.menusService.findOne(+id); // +id를 하여 string -> number
  // }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.menusService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menusService.update(id, updateMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.menusService.remove(id);
  }
}
