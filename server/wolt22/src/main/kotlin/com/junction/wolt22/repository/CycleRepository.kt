package com.junction.wolt22.repository

import com.junction.wolt22.domain.CyclesEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import java.lang.annotation.Native

interface CycleRepository : JpaRepository<CyclesEntity, Int> {

    @Query(nativeQuery = true, value = "Select * from cycles where user_id=:userId or recipient_id=:userId")
    fun obteCyclesDeUsuari(userId : Int) : List<CyclesEntity>
}