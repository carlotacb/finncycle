package com.junction.wolt22.service

import com.fasterxml.jackson.databind.ObjectMapper
import com.google.gson.Gson
import com.junction.wolt22.beans.CycleDTO
import com.junction.wolt22.beans.DeliveryDTO.*
import com.junction.wolt22.beans.DeliveryResponse.DeliveryResponseDTO
import com.junction.wolt22.beans.FeeDTO.FeeDTO
import com.junction.wolt22.beans.FeeResponse.FeeResponse
import com.junction.wolt22.domain.CyclesEntity
import com.junction.wolt22.domain.ProductEntity
import com.junction.wolt22.repository.CycleRepository
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import java.net.URI
import java.net.URLEncoder
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

@Service
class CycleService(
        private val cycleRepository: CycleRepository,
        private val userService: UserService,
        private val gson: Gson
) {
    private val STATUS_PENDING = "PENDING"
    private val STATUS_CLAIMED = "CLAIMED"
    private val STATUS_DELIVERED = "DELIVERED"

    private val BASE_URL = "https://daas-public-api.development.dev.woltapi.com"

    @Value("\${apikey}")
    private lateinit var apiKey : String

    @Value("\${merchantid}")
    private lateinit var merchantid : String

    fun getUserCycles(userId : Int) : ArrayList<CycleDTO>{
        val listCyclesEntity = cycleRepository.obteCyclesDeUsuari(userId)
        val listCycleDTO = arrayListOf<CycleDTO>()

        if (!listCyclesEntity.isNullOrEmpty()) {
            listCyclesEntity.forEach {
                val cycleDTO = CycleDTO(
                    it.id,
                    it.productId!!,
                    it.refProductEntity?.name!!,
                    it.status,
                    it.refProductEntity?.type!!,
                    it.refUsersEntity?.name!!,
                    it.refUsersEntityRecipient?.name!!,
                )
                listCycleDTO.add(cycleDTO)
            }
            return listCycleDTO
        } else throw RuntimeException()
    }

    fun createNewCycle(product : ProductEntity) : Boolean {
        var cycleEntity = CyclesEntity(
           productId = product.id,
            status = STATUS_PENDING,
            userId = product.refUsersEntity?.id!!
        )
        cycleEntity.refUsersEntity = userService.getUserById(cycleEntity.userId!!)
        cycleEntity.refProductEntity = product
        cycleEntity = cycleRepository.saveAndFlush(cycleEntity)

        val listCyclesProduct = mutableListOf<CyclesEntity>()
        listCyclesProduct.add(cycleEntity)

        product.refCyclesEntities = listCyclesProduct

        try {
            if (product.type == "RECYCLE") {
                createRecycleCycle(cycleEntity)
                return true
            }
            else return true
        } catch (e: Exception){
            return false
        }
    }

    fun createRecycleCycle(cycle : CyclesEntity) {
        // find punt verd

        val puntVerd = userService.getUserById(-4);

        cycle.refUsersEntityRecipient = puntVerd

        val deliveryRespose = callDeliveryOrder_API_Wolt(cycle)

        cycle.dropoffTime = deliveryRespose.dropoff.eta
    }

    fun callDeliveryOrder_API_Wolt(cycle: CyclesEntity) : DeliveryResponseDTO {
        // get usuari recipient
        val delivery_URL=BASE_URL+"/merchants/$merchantid/delivery-order"
        val root = poblaJsonAPIWolt_DeliveryOrder(cycle)

        val objectMapper = ObjectMapper()
        val requestBody: String = gson.toJson(root)

        val client = HttpClient.newBuilder().build();
        val request = HttpRequest.newBuilder()
            .uri(URI.create(delivery_URL))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer $apiKey")
            .POST(HttpRequest.BodyPublishers.ofString(requestBody))
            .build()

        val response = client.send(request, HttpResponse.BodyHandlers.ofString());

        val responseParsed = gson.fromJson(response.body(), DeliveryResponseDTO::class.java)
        return responseParsed
    }

    fun poblaJsonAPIWolt_DeliveryOrder(cycle : CyclesEntity) : Root{

        val contactDetails = Contact_details(
            cycle.refUsersEntity?.name,
            cycle.refUsersEntity?.phone,
            false
        )

        val contents = Contents(
            1,
            cycle.refProductEntity?.description,
            cycle.refProductEntity?.id.toString(),
            emptyArray()
        )

        val dropoff = Dropoff(
            Location(
                "${cycle.refUsersEntityRecipient?.address}, ${cycle.refUsersEntityRecipient?.postalCode} ${cycle.refUsersEntityRecipient?.city}"
            ),
            comment = "Knock Knock",
            Contact_details(
                cycle.refUsersEntityRecipient?.name,
                cycle.refUsersEntityRecipient?.phone,
                false
            )
        )

        val pickup = Pickup(
            Location(
                cycle.refUsersEntity?.address
            ),
            "The box is in front of the door",
            contactDetails
        )

        val customerSupport = Customer_support(
            "String", "String", "String"
        )

        val arrayContents = arrayOf<Contents>(contents)

        val root = Root(
            pickup,
            dropoff,
            customerSupport,
            null,
            true,
            arrayContents,
            emptyArray(),
            10,
            null
        )
        return root
    }

    fun claimCycle(apiKey : String, idCycle : Int) : Boolean {
        TODO()
    }

    fun getDeliveryFee_API_Wolt(address1: String, address2: String) : Double {
        // get usuari recipient
        val delivery_URL=BASE_URL+"/merchants/$merchantid/delivery-fee"
        val root = poblaJsonAPIWolt_DeliveryFee(address1,address2)

        val objectMapper = ObjectMapper()
        val requestBody: String = gson.toJson(root)

        val client = HttpClient.newBuilder().build();
        val request = HttpRequest.newBuilder()
                .uri(URI.create(delivery_URL))
                .header("Content-Type", "application/json")
                .header("Authorization", "Bearer $apiKey")
                .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                .build()

        val response = client.send(request, HttpResponse.BodyHandlers.ofString());

        val responseParsed = gson.fromJson(response.body(), FeeResponse::class.java)
        return responseParsed.fee.amount / 100.0
    }

    fun poblaJsonAPIWolt_DeliveryFee (address1: String, address2: String) : FeeDTO {
        val pickup = com.junction.wolt22.beans.FeeDTO.Pickup(
                Location(
                        address1
                )
        )
        val dropoff = com.junction.wolt22.beans.FeeDTO.Dropoff(
                Location(
                address2
            )
        )
        return FeeDTO(
               pickup,
               dropoff = dropoff
        )
    }
}