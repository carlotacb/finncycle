package com.junction.wolt22.service

import com.junction.wolt22.domain.UsersEntity
import com.junction.wolt22.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService (
    private val userRepository : UserRepository
){
    fun authenticateUser(api_key : String) : Boolean {
        return userRepository.findByApiKey(api_key).isPresent
    }

    @Throws(java.lang.Exception::class)
    fun getUser(apiKey : String) : UsersEntity{
        val user = userRepository.findByApiKey(apiKey)
        if (user.isPresent) return user.get()
        else throw RuntimeException()
    }

    fun getUserById(id : Int) : UsersEntity {
        val user = userRepository.findById(id)
        if (user.isPresent) return user.get()
        else throw Exception()
    }
}