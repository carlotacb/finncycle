package com.junction.wolt22.beans.DeliveryDTO

import kotlin.String

data class Dropoff(
    val location: Location,
    val comment: String,
    val contact_details: Contact_details
)