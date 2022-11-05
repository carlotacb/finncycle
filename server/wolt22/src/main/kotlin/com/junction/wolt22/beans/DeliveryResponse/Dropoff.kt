package com.junction.wolt22.beans.DeliveryResponse

import com.junction.wolt22.beans.DeliveryDTO.Contact_details
import kotlin.String

data class Dropoff(
    val eta: String,
    val location: Location,
    val comment: String,
    val contact_details: Contact_details
)