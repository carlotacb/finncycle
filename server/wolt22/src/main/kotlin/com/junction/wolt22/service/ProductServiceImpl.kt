package com.junction.wolt22.service

import com.junction.wolt22.beans.ProductDTO
import com.junction.wolt22.domain.ProductEntity
import com.junction.wolt22.repository.ProductRepository
import org.springframework.stereotype.Service

@Service
class ProductServiceImpl(
        private val productRepository: ProductRepository
) : ProductService {
    override fun createProduct(productDTO: ProductDTO): Boolean {
        val productEntity = ProductEntity(
                name = productDTO.name,
                description = productDTO.description,
                image = productDTO.image
        )
        val entity = productRepository.saveAndFlush(productEntity)
        return entity.id > -1
    }
}