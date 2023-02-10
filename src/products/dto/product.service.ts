import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './create-product.dto';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class ProductsService {
    constructor(private sequelize: Sequelize){}
    private products = [];


  getall() {
    return this.products;
  }

  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }
  create(productDto: CreateProductDto) {
    this.products.push({
      ...productDto,
      id: Date.now().toString(),
    });
  }
}

