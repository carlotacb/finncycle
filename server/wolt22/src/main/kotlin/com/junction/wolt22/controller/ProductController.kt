package com.junction.wolt22.controller

import com.junction.wolt22.beans.ProductDTO
import com.junction.wolt22.service.ProductService
import com.junction.wolt22.service.UserService
import org.springframework.http.HttpEntity
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(path = ["/product"])
class ProductController (
    private val productService: ProductService,
    private val userService: UserService
    ) {

    @PostMapping("/{idUser}")
    fun createProduct(@PathVariable("idUser") idUser: String, @RequestBody productDTO: ProductDTO) : ResponseEntity<Any> {
        val user = userService.getUser(idUser)
        val creat = productService.createProduct(user, productDTO)
        if (creat) return ResponseEntity(HttpStatus.CREATED)
        else return ResponseEntity(HttpStatus.BAD_REQUEST)
    }

    @GetMapping("/{idProduct}")
    fun getProductDetail(@PathVariable("idProduct") idProduct : Int) : ResponseEntity<ProductDTO>{
        try{
            val product = productService.getProductDetail(idProduct)
            return ResponseEntity.ok(product)
        } catch (e : Exception){
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }

    @PutMapping("/{idProduct}")
    fun modifyProduct(@PathVariable("idProduct") idProduct: Int, @RequestBody product : ProductDTO) : ResponseEntity<Any>{
        try {
            val productModificat = productService.modifyProduct(idProduct, product)
            return ResponseEntity.ok(productModificat)
        } catch (e : Exception) {
            return ResponseEntity.badRequest().body(e.message)
        }
    }
}