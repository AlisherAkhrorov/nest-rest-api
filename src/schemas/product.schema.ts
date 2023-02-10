import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import exp from "constants";
export type ProductsDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  title: string;

  @Prop()
  price: number;
}

export const ProductsSchema = SchemaFactory.createForClass(Product);
