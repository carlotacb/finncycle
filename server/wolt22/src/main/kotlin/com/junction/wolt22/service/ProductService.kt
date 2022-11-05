package com.junction.wolt22.service

import com.junction.wolt22.beans.ProductDTO
import com.junction.wolt22.domain.ProductEntity
import com.junction.wolt22.domain.UsersEntity

interface ProductService {
    fun createProduct(user: UsersEntity, productDTO: ProductDTO) : ProductEntity

    fun getProductDetail(idProduct : Int) : ProductDTO

    fun modifyProduct(idProduct: Int, productDTO: ProductDTO) : ProductDTO

    fun getAllProductOf(userId : Int) : ArrayList<ProductDTO>
}