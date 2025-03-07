import { Controller, Get, HttpCode, Param, Query } from '@nestjs/common';

@Controller({ path: 'users' })
export class UsersController {
  @Get()
  @HttpCode(404)
  findAll() {
    return {
      title: '123',
    };
  }

  @Get(':id/type/:typeId')
  findOne(@Param() params: string[], @Query() queries: string[]) {
    return {
      params,
      queries,
    };
  }
}
