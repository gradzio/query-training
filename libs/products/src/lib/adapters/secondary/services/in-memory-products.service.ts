import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GetsAllProductDtoPort } from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';
import { makeProductDtoStub } from '../../../application/ports/secondary/dto/product.dto.stub';

@Injectable()
export class InMemoryProductsService implements GetsAllProductDtoPort {
  getAll(): Observable<ProductDTO[]> {
    return of([
      makeProductDtoStub('Product 1'),
      makeProductDtoStub('Product 2'),
    ]);
  }
}
