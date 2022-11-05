package com.junction.wolt22.service

import com.junction.wolt22.beans.LoginDTO
import com.junction.wolt22.beans.UserDTO
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

    fun getUserById(id : Int) : UsersEntity {
        val user = userRepository.findById(id)
        if (user.isPresent) return user.get()
        else throw Exception()
    }

    fun login(loginDTO: LoginDTO): String {
        val user = userRepository.findByEmail(loginDTO.email)
        if (user.isPresent) {
            val pass = user.get().password
            if (pass == loginDTO.password) {
                return generateApiKey(user.get())
            }
            else return "1"
        }
        else {
            return "2"
        }
    }

    private fun generateApiKey(user: UsersEntity) : String {
        val apiKey = randomID()
        user.apiKey = apiKey
        userRepository.saveAndFlush(user)
        return apiKey
    }

    fun register(user: UsersEntity): String {
        if (!userRepository.findByEmail(user.email.toString()).isPresent) {
            val apiKey = randomID()
            user.apiKey = apiKey
            userRepository.saveAndFlush(user)
            return apiKey
        } else return ""
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

    fun getUserInfo(apiKey: String): UserDTO {
        val userDB = userRepository.findByApiKey(apiKey).get()
        val reused = userRepository.countUsedItems(userDB.id)
        val recycled = userRepository.countRecycledItems(userDB.id)
        val claimed = userRepository.countClaimedItems(userDB.id)
        return UserDTO(userDB.name, userDB.email, userDB.address, userDB.country, userDB.postalCode, userDB.phone,
            userDB.apiKey, reused, recycled, claimed)
    }
}