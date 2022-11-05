package com.junction.wolt22.service

import com.junction.wolt22.beans.UserDTO
import com.junction.wolt22.domain.UsersEntity
import com.junction.wolt22.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService (
    private val userRepository : UserRepository
){

    @Throws(java.lang.Exception::class)
    fun getUser(idUser : String) : UsersEntity {
        val user = userRepository.findById(idUser.toInt())
        if (user.isPresent) return user.get()
        else throw RuntimeException()
    }

    fun login(userDTO: UserDTO): Int {
        val user = userRepository.findByEmail(userDTO.email)
        if (user.isPresent) {
            val pass = user.get().password
            if (pass == userDTO.password) {
                return 0
            }
            else return 1
        }
        else {
            return 2
        }
    }

    fun register(user: UsersEntity): Boolean {
        if (!userRepository.findByEmail(user.email.toString()).isPresent) {
            userRepository.saveAndFlush(user)
            return true
        } else return false
    }
}