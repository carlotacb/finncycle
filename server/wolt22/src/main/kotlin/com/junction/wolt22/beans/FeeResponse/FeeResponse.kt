package com.junction.wolt22.beans.FeeResponse

data class FeeResponse(
        val created_at: String,
        val pickup: Pickup,
        val dropoff: Dropoff,
        val fee: Fee,
        val time_estimate_minutes: Int,
        val scheduled_dropoff_time: String
)
