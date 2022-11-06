package com.junction.wolt22.controller

import com.junction.wolt22.beans.CycleDTO
import com.junction.wolt22.service.CycleService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping(path=["/cycles"])
@CrossOrigin(origins = ["*"], methods = [RequestMethod.GET, RequestMethod.POST])
class CycleController(
        private val cycleService: CycleService
) {

    @GetMapping()
    fun getUserCycles(@RequestParam("apikey") apikey: String) : ResponseEntity<Any>{
        try {
            var cycles = cycleService.getUserCycles(apikey)
            return ResponseEntity.ok(cycles)
        } catch (e : Exception) {
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }

    @PostMapping()
    fun claimCycle(@RequestParam("apikey") apikey : String, @RequestParam("idProduct") idProduct : Int) : ResponseEntity<Any>{
        try {
            val created = cycleService.claimCycle(apikey, idProduct)
            if (created) return ResponseEntity(HttpStatus.CREATED)
            return ResponseEntity(HttpStatus.OK)
        } catch (e : Exception) {
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }

    //TODO(" GET OUTGOING")
    //TODO(" GET INCOMING")
    //TODO(" GET TRASH")
}