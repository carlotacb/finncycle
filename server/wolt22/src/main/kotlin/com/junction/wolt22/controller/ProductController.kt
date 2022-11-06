package com.junction.wolt22.controller

import com.junction.wolt22.beans.FeeAndProductDTO
import com.junction.wolt22.beans.ProductDTO
import com.junction.wolt22.service.CycleService
import com.junction.wolt22.service.ProductService
import com.junction.wolt22.service.UserService
import org.springframework.http.HttpEntity
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping(path = ["/product"])
@CrossOrigin(origins = ["*"], methods = [RequestMethod.GET, RequestMethod.POST,
    RequestMethod.PUT])
class ProductController (
    private val productService: ProductService,
    private val userService: UserService,
    private val cycleService: CycleService
    ) {

    @PostMapping()
    fun createProduct(@RequestParam("apiKey") apiKey: String, @RequestBody productDTO: ProductDTO) : ResponseEntity<Any> {
        val user = userService.getUser(apiKey)
        try {
            val newProduct = productService.createProduct(user, productDTO)
            val newCycle = cycleService.createNewCycle(newProduct)
            if (newCycle) return ResponseEntity(HttpStatus.CREATED)
            else return ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR)
        } catch (e  : Exception) {
            e.printStackTrace()
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        }

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

    @PutMapping()
    fun modifyProduct(@RequestParam("idProduct") idProduct: Int, @RequestBody product : ProductDTO) : ResponseEntity<Any>{
        try {
            val productModificat = productService.modifyProduct(idProduct, product)
            return ResponseEntity.ok(productModificat)
        } catch (e : Exception) {
            return ResponseEntity.badRequest().body(e.message)
        }
    }

    // display all products that are not owned by the user that requests it
    @GetMapping("/all")
    fun getAllProducts(@RequestParam("apiKey") apiKey: String) : ResponseEntity<ArrayList<FeeAndProductDTO>>{
        val user = userService.getUser(apiKey)
        try {
            val allproducts = productService.getAllProductOf(user)
            return ResponseEntity.ok(allproducts)
        } catch (e : Exception) {
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }
}