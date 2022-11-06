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

    @GetMapping(path = ["/usercycles"])
    fun getUserCycles(@RequestParam("apikey") apikey: String) : ResponseEntity<Any>{
        try {
            var cycles = cycleService.getUserCycles(apikey)
            return ResponseEntity.ok(cycles)
        } catch (e : Exception) {
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }

    @PostMapping(path = ["/claim"])
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
    @GetMapping(path = ["/outgoing"])
    fun outgoingCycles(@RequestParam("apikey") apikey: String) : ResponseEntity<Any> {
        try {
            val res = cycleService.getOutgoing(apikey)
            return ResponseEntity(res, HttpStatus.OK)
        } catch (e : Exception) {
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }

    @GetMapping(path = ["/incoming"])
    fun incomingCycles(@RequestParam("apikey") apikey: String) : ResponseEntity<Any> {
        try {
            val res = cycleService.getIncoming(apikey)
            return ResponseEntity(res, HttpStatus.OK)
        } catch (e : Exception) {
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }

    @GetMapping(path = ["/recycled"])
    fun recycledCycles(@RequestParam("apikey") apikey: String) : ResponseEntity<Any> {
        try {
            val res = cycleService.getRecycled(apikey)
            return ResponseEntity(res, HttpStatus.OK)
        } catch (e : Exception) {
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }
}