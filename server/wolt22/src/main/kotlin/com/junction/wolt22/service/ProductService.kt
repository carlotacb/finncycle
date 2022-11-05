package com.junction.wolt22.service

import com.junction.wolt22.beans.ProductDTO
import com.junction.wolt22.domain.ProductEntity
import com.junction.wolt22.domain.UsersEntity
import com.junction.wolt22.repository.ProductRepository
import org.springframework.stereotype.Service
import kotlin.jvm.Throws

@Service
class ProductService(
        private val productRepository: ProductRepository
) {
    fun createProduct(user : UsersEntity, productDTO: ProductDTO): Boolean {
        val productEntity = ProductEntity(
                name = productDTO.name,
                description = productDTO.description,
                image = productDTO.image
        )
        val listProducts = user.refProductEntity.toMutableList()
        listProducts.add(productEntity)
        user.refProductEntity = listProducts
        productEntity.refUsersEntity = user
        val entity = productRepository.saveAndFlush(productEntity)
        return entity.id > -1
    }

    @Throws(RuntimeException::class)
    fun getProductDetail(idProduct : Int) : ProductDTO {
        val product = productRepository.findById(idProduct)

        if (product.isPresent) {
            val producte = product.get()
            return ProductDTO(
                producte.id,
                producte.name,
                producte.description,
                producte.image
            )
        } else
            throw RuntimeException()
    }


    //NO SE EXACTAMET QUINS CAMPS VOLIA CANVIAR LA CARLOTA
    @Throws(RuntimeException::class)
    fun mofifyProduct(idProduct: Int, productDTO: ProductDTO): ProductDTO {
        val product = productRepository.findById(idProduct)

        if (product.isPresent) {
            var producteAModificar = product.get()
            producteAModificar.name = productDTO.name
            producteAModificar.description = productDTO.description
            producteAModificar.image = productDTO.image

            producteAModificar = productRepository.saveAndFlush(producteAModificar)

            return ProductDTO(
                producteAModificar.id,
                producteAModificar.name,
                producteAModificar.description,
                producteAModificar.image
            )

        } else {
            throw RuntimeException()
        }
    }

    fun getAllProductOf(userId: Int): ArrayList<ProductDTO> {
        var products = productRepository.findAll()
        var filteredProducts = arrayListOf<ProductDTO>();
        products.forEach(fun (product : ProductEntity){
                if(product.refUsersEntity?.id != userId){
                    filteredProducts.add(ProductDTO(
                            id = product.id,
                            name = product.name,
                            description = product.description,
                            image = product.image
                    ))
                }
        })
        return filteredProducts
    }
}