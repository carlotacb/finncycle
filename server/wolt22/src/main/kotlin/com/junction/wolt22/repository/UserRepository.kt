package com.junction.wolt22.repository

import com.junction.wolt22.domain.UsersEntity
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface UserRepository: JpaRepository<UsersEntity, Int> {
    fun findByApiKey(apiKey : String) : Optional<UsersEntity>
}