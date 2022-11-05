package com.junction.wolt22.beans.DeliveryDTO

import kotlin.Any
import kotlin.Array
import kotlin.Int
import kotlin.String

data class Contents(
    val count: Int,
    val description: String?,
    val identifier: String?,
    val tags: Array<Any>
)