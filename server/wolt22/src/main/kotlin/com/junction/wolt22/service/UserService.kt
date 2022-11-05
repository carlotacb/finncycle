package com.junction.wolt22.service

import com.junction.wolt22.beans.UsersDTO
import com.junction.wolt22.domain.UsersEntity
import com.junction.wolt22.repository.UserRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class UserService (
    private val userRepository : UserRepository
){
    private fun randomID(): String = List(16) {
        (('a'..'z') + ('A'..'Z') + ('0'..'9')).random()
    }.joinToString("")

    fun authenticateUser(apiKey : String) : Boolean {
        return userRepository.findByApiKey(apiKey).isPresent
    }

    @Throws(java.lang.Exception::class)
    fun getUser(idUser : String) : UsersEntity {
        val user = userRepository.findById(idUser.toInt())
        if (user.isPresent) return user.get()
        else throw RuntimeException()
    }

    fun login(usersDTO: UsersDTO): Int {
        val user = userRepository.findByEmail(usersDTO.email)
        if (user.isPresent) {
            val pass = user.get().password
            if (pass == usersDTO.password) {
                generateApiKey(user.get())
                return 0
            }
            else return 1
        }
        else {
            return 2
        }
    }

    private fun generateApiKey(user: UsersEntity) : Boolean {
        val apiKey = randomID()
        user.apiKey = apiKey
        val entity = userRepository.saveAndFlush(user)
        return entity.id > -1
    }

    fun register(user: UsersEntity): Boolean {
        if (!userRepository.findByEmail(user.email.toString()).isPresent) {
            user.apiKey = randomID()
            userRepository.saveAndFlush(user)
            return true
        } else return false
    }

    fun updateUser(user: UsersEntity) : Boolean {
        println(user)
        val entity = userRepository.saveAndFlush(user)
        return entity.id > -1
    }

    fun logout(apiKey: String) : Boolean {
        val user = userRepository.findByApiKey(apiKey).get()
        user.apiKey = null
        val entity = userRepository.saveAndFlush(user)
        return entity.id > -1
    }
}