package com.junction.wolt22.beans.DeliveryDTO

import kotlin.String

data class Pickup(
    val location: Location,
    val comment: String,
    val contact_details: Contact_details
)
