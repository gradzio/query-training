import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';
import {
  GETS_ALL_PRODUCT_DTO,
  GetsAllProductDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import { ProductTableQuery } from '../../../application/ports/primary/query/product-table.query';
import { ProductTableRowQuery } from '../../../application/ports/primary/query/product-table-row.query';

@Component({
  selector: 'lib-product-table',
  templateUrl: './product-table.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTableComponent {}
