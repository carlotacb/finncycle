package com.junction.wolt22.repository

import com.junction.wolt22.beans.CycleDTO
import com.junction.wolt22.domain.CyclesEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import java.lang.annotation.Native

interface CycleRepository : JpaRepository<CyclesEntity, Int> {

    @Query(nativeQuery = true, value = "Select * from cycles where user_id=:userId or recipient_id=:userId")
    fun obteCyclesDeUsuari(userId : Int) : List<CyclesEntity>

    fun findByProductId(productId : Int) : CyclesEntity

    @Query(nativeQuery = true, value = "Select * from cycles where user_id=:userId")
    fun findAllOutgoing(userId: Int): List<CyclesEntity>

    @Query(nativeQuery = true, value = "Select * from cycles where recipient_id=:userId")
    fun findAllIncoming(userId: Int): List<CyclesEntity>

    @Query(nativeQuery = true, value = "Select * from cycles inner join product p on p.id = cycles.product_id where cycles.user_id=:userId and p.type='RECYCLING'")
    fun findAllRecycled(userId: Int): List<CyclesEntity>
}