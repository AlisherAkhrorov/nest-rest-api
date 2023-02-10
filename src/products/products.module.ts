import { Module } from '@nestjs/common';
import { ProductsService } from './dto/product.service';
import { ProductsController } from './products.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    providers: [ProductsService],
    controllers: [ProductsController],
    imports: [SequelizeModule.forFeature([Products])],
  })
export class ProductModule { }
