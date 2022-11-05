package com.junction.wolt22.service

import com.junction.wolt22.domain.UsersEntity
import com.junction.wolt22.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService (
    private val userRepository : UserRepository
){

    @Throws(java.lang.Exception::class)
    fun getUser(idUser : String) : UsersEntity{
        val user = userRepository.findById(idUser.toInt())
        if (user.isPresent) return user.get()
        else throw RuntimeException()
    }
}