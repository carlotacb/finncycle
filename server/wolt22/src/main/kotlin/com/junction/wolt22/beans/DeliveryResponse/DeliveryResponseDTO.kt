package com.junction.wolt22.beans.DeliveryResponse

import com.junction.wolt22.beans.DeliveryDTO.Contents
import com.junction.wolt22.beans.DeliveryDTO.Customer_support

data class DeliveryResponseDTO(
    val pickup: Pickup,
    val dropoff: Dropoff,
    val scheduled_dropoff_time: String,
    val customer_support: Customer_support,
    val is_no_contact: Boolean,
    val merchant_order_reference_id: String,
    val contents: Array<Contents>,
    val tips: Array<Tips>,
    val price: Price,
    val tracking: Tracking,
    val wolt_order_reference_id: String,
    val min_preparation_time_minutes: Int
)
