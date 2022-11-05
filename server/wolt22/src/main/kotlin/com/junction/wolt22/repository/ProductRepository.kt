package com.junction.wolt22.repository

import com.junction.wolt22.domain.ProductEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query

interface ProductRepository : JpaRepository<ProductEntity, Int> {
    //TODO("AAAAAA")


    // @Query(value = "SELECT  FROM product WHERE user_id NOT ?1")
    //  fun findAllUserProducts(userId: Int)
}