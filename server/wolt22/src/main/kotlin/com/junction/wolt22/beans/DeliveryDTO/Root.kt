package com.junction.wolt22.beans.DeliveryDTO

import kotlin.Any
import kotlin.Array
import kotlin.Boolean
import kotlin.Int

data class Root(
    val pickup: Pickup,
    val dropoff: Dropoff,
    val customer_support: Customer_support,
    val merchant_order_reference_id: Any?,
    val is_no_contact: Boolean,
    val contents: Array<Contents>,
    val tips: Array<Any>,
    val min_preparation_time_minutes: Int,
    val scheduled_dropoff_time: Any?
)
