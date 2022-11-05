package com.junction.wolt22.controller

import com.junction.wolt22.beans.LoginDTO
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


    // Register of a user
    @PostMapping(path = ["/register"])
    fun registerUser(@RequestBody user : UsersEntity) : ResponseEntity<Any> {
        val res = userService.register(user)
        if (res != "") return ResponseEntity(res, HttpStatus.CREATED)
        else return ResponseEntity(HttpStatus.BAD_REQUEST)
    }

    // Login of a user
    @GetMapping(path = ["/login"])
    fun loginUser(@RequestBody user : LoginDTO) : ResponseEntity<Any> {
        val res = userService.login(user)
        if (res == "1") return ResponseEntity(HttpStatus.FORBIDDEN)
        else if (res == "2") return ResponseEntity(HttpStatus.NOT_FOUND)
        else return ResponseEntity(res, HttpStatus.OK)
    }

    // Logout of a user
    @PostMapping(path = ["/logout"])
    fun logoutUser(@RequestParam apiKey: String) : ResponseEntity<Any> {
        if (userService.authenticateUser(apiKey)) {
            userService.logout(apiKey)
            return ResponseEntity(HttpStatus.OK)
        }
        else return ResponseEntity(HttpStatus.UNAUTHORIZED)
    }

    // Updates information about a user
   @PostMapping(path = ["/update"])
   fun updateUser(@RequestParam apiKey : String, @RequestBody user: UsersEntity) : ResponseEntity<Any> {
       if (userService.authenticateUser(apiKey)) {
           val res = userService.updateUser(user)
           if (res) return ResponseEntity(HttpStatus.OK)
           else return ResponseEntity(HttpStatus.BAD_REQUEST)
       }
       else return ResponseEntity(HttpStatus.UNAUTHORIZED)

   }

    // Get user profile information
    @PostMapping(path = ["/profile"])
    fun getUserInfo(@RequestParam apiKey: String) : ResponseEntity<Any> {
        if (userService.authenticateUser(apiKey)) {
            return ResponseEntity(userService.getUserInfo(apiKey),HttpStatus.OK)

        } else return ResponseEntity(HttpStatus.UNAUTHORIZED)
    }

}