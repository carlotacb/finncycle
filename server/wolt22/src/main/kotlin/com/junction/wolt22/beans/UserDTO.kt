package com.junction.wolt22.beans

data class UserDTO(
    val name : String?,
    val city : String?,
    val address : String?,
    val country : String?,
    val postalCode : String?,
    val phone : String?,
    val apiKey : String?,
    val reused : Int,
    val recycled : Int,
    val claimed : Int
)
