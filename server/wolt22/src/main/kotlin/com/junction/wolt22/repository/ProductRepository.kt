package com.junction.wolt22.repository

import com.junction.wolt22.domain.ProductEntity
import org.springframework.data.jpa.repository.JpaRepository

interface ProductRepository : JpaRepository<ProductEntity, Int> {
    //TODO("AAAAAA")
}