package com.junction.wolt22.repository

import com.junction.wolt22.domain.UsersEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import java.util.*

interface UserRepository: JpaRepository<UsersEntity, Int> {

    fun findByEmail(email: String) : Optional<UsersEntity>
    fun findByApiKey(apiKey : String) : Optional<UsersEntity>
    @Query(nativeQuery = true, value = "select count(*) from product p where p.user_id = ?1 and p.type = 'RECYCLE'")
    fun countUsedItems(userId: Int): Int
    @Query(nativeQuery = true, value = "select count(*) from product p where p.user_id = ?1 and p.type = 'TRASH'")
    fun countRecycledItems(userId: Int): Int
    @Query(nativeQuery = true, value = "select count(*) from cycles c where c.recipient_id = ?1 and c.status <> 'PENDING'")
    fun countClaimedItems(userId: Int): Int

}