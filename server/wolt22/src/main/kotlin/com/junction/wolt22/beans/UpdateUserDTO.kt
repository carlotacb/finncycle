package com.junction.wolt22.beans

data class UpdateUserDTO (
    val name: String,
    val address: String,
    val postalCode: String,
    val city: String,
    val country: String
)