package com.junction.wolt22.beans.DeliveryResponse
import kotlin.String

data class Location(
    val formatted_address: String,
    val coordinates: Coordinates
)