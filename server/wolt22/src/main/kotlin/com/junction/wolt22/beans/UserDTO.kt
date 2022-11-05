package com.junction.wolt22.beans

data class UserDTO(
    val name : String?,
    val email : String?,
    val address : String?,
    val country : String?,
    val postalCode : Int?,
    val phone : String?,
    val apiKey : String?,
    val reused : Int,
    val recycled : Int,
    val claimed : Int
)
