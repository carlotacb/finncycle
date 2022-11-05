package com.junction.wolt22.service

import com.junction.wolt22.beans.ProductDTO

interface ProductService {
    fun createProduct(productDTO: ProductDTO) : Boolean
}