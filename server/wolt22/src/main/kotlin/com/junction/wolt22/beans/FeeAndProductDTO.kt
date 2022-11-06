package com.junction.wolt22.beans

data class FeeAndProductDTO(
    var id : Int,
    var name : String,
    var description : String?,
    var image : String?,
    var type : String,
    var fee : Double
)
