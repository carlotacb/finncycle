package com.junction.wolt22.service

import com.junction.wolt22.beans.CycleDTO
import com.junction.wolt22.repository.CycleRepository
import org.springframework.stereotype.Service

@Service
class CycleService(
        private val cycleRepository: CycleRepository
) {
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
}