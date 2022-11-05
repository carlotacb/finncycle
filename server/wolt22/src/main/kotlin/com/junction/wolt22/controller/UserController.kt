package com.junction.wolt22.controller

import com.junction.wolt22.beans.UserDTO
import com.junction.wolt22.domain.UsersEntity
import com.junction.wolt22.service.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class UserController (
    private val userService: UserService
        ){


    @GetMapping(path = ["/register"])
    fun registerUser(@RequestBody user : UsersEntity) : ResponseEntity<Any> {
        val res = userService.register(user)
        if (res) return ResponseEntity(HttpStatus.CREATED)
        else return ResponseEntity(HttpStatus.BAD_REQUEST)
    }

    @GetMapping(path = ["/login"])
    fun loginUser(@RequestBody user : UserDTO) : ResponseEntity<Any> {
        val res = userService.login(user)
        if (res == 0) return ResponseEntity(HttpStatus.OK)
        else if (res == 1) return ResponseEntity(HttpStatus.FORBIDDEN)
        else return ResponseEntity(HttpStatus.NOT_FOUND)
    }

}