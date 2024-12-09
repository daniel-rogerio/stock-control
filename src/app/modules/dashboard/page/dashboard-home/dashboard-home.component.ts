import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { GetAllProductsResponse } from 'src/app/models/interfaces/products/response/GetAllProductsResponse';
import { ProductsService } from 'src/app/services/products/products.service';
import { ProductsDataTransferService } from 'src/app/shared/services/products/products-data-transfer.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private messageService: MessageService,
    private productsDtSerice: ProductsDataTransferService
  ) {}

  public productsList: Array<GetAllProductsResponse> = [];

  ngOnInit(): void {
    this.getProductsDatas();
  }

  getProductsDatas(): void {
    this.productsService.getAllProducts()
    .subscribe({
      next: (response) => {
        if (response.length > 0) {
          this.productsList = response;
          this.productsDtSerice.setProductsDatas(this.productsList);
        }
      },
      error: (err) => {
        console.log(err);
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao buscar produtos.',
          life: 2500,
        })
      }
    })
  }
}
