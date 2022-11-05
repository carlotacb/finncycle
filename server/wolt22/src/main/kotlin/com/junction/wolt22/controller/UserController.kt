package com.junction.wolt22.controller

import com.junction.wolt22.beans.UsersDTO
import com.junction.wolt22.domain.UsersEntity
import com.junction.wolt22.service.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping(path = ["/user"])
class UserController (
    private val userService: UserService
        ){


    @PostMapping(path = ["/register"])
    fun registerUser(@RequestBody user : UsersEntity) : ResponseEntity<Any> {
        val res = userService.register(user)
        if (res) return ResponseEntity(HttpStatus.CREATED)
        else return ResponseEntity(HttpStatus.BAD_REQUEST)
    }

    @GetMapping(path = ["/login"])
    fun loginUser(@RequestBody user : UsersDTO) : ResponseEntity<Any> {
        val res = userService.login(user)
        if (res == 0) return ResponseEntity(HttpStatus.OK)
        else if (res == 1) return ResponseEntity(HttpStatus.FORBIDDEN)
        else return ResponseEntity(HttpStatus.NOT_FOUND)
    }

    @PostMapping(path = ["/logout"])
    fun logoutUser(@RequestParam apiKey: String) : ResponseEntity<Any> {
        if (userService.authenticateUser(apiKey)) {
            userService.logout(apiKey)
            return ResponseEntity(HttpStatus.OK)
        }
        else return ResponseEntity(HttpStatus.UNAUTHORIZED)
    }

   @PostMapping(path = ["/update"])
   fun updateUser(@RequestParam apiKey : String, @RequestBody user: UsersEntity) : ResponseEntity<Any> {
       if (userService.authenticateUser(apiKey)) {
           val res = userService.updateUser(user)
           if (res) return ResponseEntity(HttpStatus.OK)
           else return ResponseEntity(HttpStatus.BAD_REQUEST)
       }
       else return ResponseEntity(HttpStatus.UNAUTHORIZED)

   }

    // TODO GetUser

    // TODO get user stats
}