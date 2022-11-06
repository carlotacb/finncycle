package com.junction.wolt22.domain

import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "cycles", schema = "public", catalog = "finncycle")
open class CyclesEntity(

    @get:Basic
    @get:Column(name = "user_id", nullable = false, insertable = false, updatable = false)
    open var userId: Int? = null,

    @get:Basic
    @get:Column(name = "status", nullable = false)
    open var status: String = "",

    @get:Basic
    @get:Column(name = "product_id", nullable = false, insertable = false, updatable = false)
    open var productId: Int? = null,

    @get:Basic
    @get:Column(name = "dropoff_time", nullable = true, insertable = true, updatable = true)
    open var dropoffTime: LocalDateTime? = LocalDateTime.now(),

    ) {
    @get:Id
    @get:Column(name = "id", nullable = false)
    @get:SequenceGenerator(name="idCycleGenerator", sequenceName = "transaction_id_seq", allocationSize = 1)
    @get:GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "idCycleGenerator")
    open var id: Int = 0

    @get:ManyToOne(fetch = FetchType.LAZY)
    @get:JoinColumn(name = "user_id", referencedColumnName = "id")
    open var refUsersEntity: UsersEntity? = null

    @get:ManyToOne(fetch = FetchType.LAZY)
    @get:JoinColumn(name = "recipient_id", referencedColumnName = "id")
    open var refUsersEntityRecipient: UsersEntity? = null

    @get:ManyToOne(fetch = FetchType.LAZY)
    @get:JoinColumn(name = "product_id", referencedColumnName = "id")
    open var refProductEntity: ProductEntity? = null

    override fun toString(): String =
        "Entity of type: ${javaClass.name} ( " +
                "id = $id " +
                "userId = $userId " +
                "status = $status " +
                "productId = $productId " +
                ")"

    // constant value returned to avoid entity inequality to itself before and after it's update/merge
    override fun hashCode(): Int = 42

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false
        other as CyclesEntity

        if (id != other.id) return false
        if (userId != other.userId) return false
        if (status != other.status) return false
        if (productId != other.productId) return false

        return true
    }

}

