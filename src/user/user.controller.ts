import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { requireRole } from '../middleware/role_check_middleware';
@Controller('user')
export class UserController {
  @Get()
  getHello(@Req() req: Request, @Res() res: Response) {
    return res.json({
      message: 'Hi User, you are authenticated via KeyCloak',
      user: req.user,
    });
  }
  @Get('adminData')
  getAdmin(@Req() req: Request, @Res() res: Response) {
    return requireRole('admin')(req, res, () =>
      res.json({
        message: 'Hello Admin, This page can be viewed only by admin',
        user: req.user,
      }),
    );
  }
  
}






