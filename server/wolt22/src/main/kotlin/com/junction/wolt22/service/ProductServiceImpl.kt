package com.junction.wolt22.service

import com.junction.wolt22.beans.ProductDTO
import com.junction.wolt22.domain.ProductEntity
import com.junction.wolt22.domain.UsersEntity
import com.junction.wolt22.repository.ProductRepository
import org.springframework.stereotype.Service
import kotlin.jvm.Throws

@Service
class ProductServiceImpl(
        private val productRepository: ProductRepository
) : ProductService {

    private val TYPE_REUSE = "REUSE"
    private val TYPE_RECYCLE = "RECYCLE"

    override fun createProduct(user : UsersEntity, productDTO: ProductDTO): ProductEntity {
        val productEntity = ProductEntity(
                name = productDTO.name,
                description = productDTO.description,
                image = productDTO.image,
                type = productDTO.type
        )
        val listProducts = user.refProductEntity.toMutableList()
        listProducts.add(productEntity)
        user.refProductEntity = listProducts
        productEntity.refUsersEntity = user
        try {
            val entity = productRepository.saveAndFlush(productEntity)
            return entity
        } catch (e : Exception){
            throw RuntimeException()
        }
    }

    @Throws(RuntimeException::class)
    override fun getProductDetail(idProduct : Int) : ProductDTO {
        val product = productRepository.findById(idProduct)

        if (product.isPresent) {
            val producte = product.get()
            return ProductDTO(
                producte.name,
                producte.description,
                producte.image,
                producte.type!!
            )
        } else
            throw RuntimeException()
    }


    //NO SE EXACTAMET QUINS CAMPS VOLIA CANVIAR LA CARLOTA
    @Throws(RuntimeException::class)
    override fun modifyProduct(idProduct: Int, productDTO: ProductDTO): ProductDTO {
        val product = productRepository.findById(idProduct)

        if (product.isPresent) {
            var producteAModificar = product.get()
            producteAModificar.name = productDTO.name
            producteAModificar.description = productDTO.description
            producteAModificar.image = productDTO.image

            producteAModificar = productRepository.saveAndFlush(producteAModificar)

            return ProductDTO(
                producteAModificar.name,
                producteAModificar.description,
                producteAModificar.image,
                producteAModificar.type!!
            )

        } else {
            throw RuntimeException()
        }
    }
}