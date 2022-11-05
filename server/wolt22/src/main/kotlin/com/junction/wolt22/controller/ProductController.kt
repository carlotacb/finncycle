package com.junction.wolt22.controller

import com.junction.wolt22.beans.ProductDTO
import com.junction.wolt22.service.ProductService
import org.springframework.http.HttpEntity
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(path = ["/product"])
class ProductController (
    private val productService: ProductService
        ) {

    @PostMapping("/{idUser}")
    fun createProduct(@PathVariable("idUser") idUser: String, @RequestBody productDTO: ProductDTO) : ResponseEntity<Any> {
        val creat = productService.createProduct(productDTO)
        if (creat) return ResponseEntity(HttpStatus.CREATED)
        else return ResponseEntity(HttpStatus.BAD_REQUEST)
    }
}