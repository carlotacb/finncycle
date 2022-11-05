package com.junction.wolt22.beans.DeliveryResponse

import com.junction.wolt22.beans.DeliveryDTO.Contact_details
import com.junction.wolt22.beans.DeliveryDTO.Location
import kotlin.String

data class Pickup(
    val eta: String,
    val location: Location,
    val comment: String,
    val contact_details: Contact_details
)