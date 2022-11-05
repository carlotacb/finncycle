package com.junction.wolt22.domain

import javax.persistence.*

@Entity
@Table(name = "product", schema = "public", catalog = "finncycle")
open class ProductEntity(

    @get:Basic
    @get:Column(name = "name", nullable = false)
    open var name: String? = null,

    @get:Basic
@get:Column(name = "description", nullable = true)
open var description: String? = null,

@get:Basic
@get:Column(name = "image", nullable = true)
open var image: String? = null
) {

    @get:Id
    @get:Column(name = "id", nullable = false, insertable = false, updatable = false)
    @get:SequenceGenerator(name="idProductGenerator", sequenceName = "product_id_seq", allocationSize = 1)
    @get:GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "idProductGenerator")
    open var id: Int = 0


    @get:OneToMany(mappedBy = "refProductEntity")
    open var refCyclesEntities: List<CyclesEntity>? = null

    @get:OneToOne(fetch = FetchType.LAZY)
    @get:JoinColumn(name = "id", referencedColumnName = "id")
    open var refUsersEntity: UsersEntity? = null

    override fun toString(): String =
        "Entity of type: ${javaClass.name} ( " +
                "id = $id " +
                "name = $name " +
                "description = $description " +
                "image = $image " +
                ")"

    // constant value returned to avoid entity inequality to itself before and after it's update/merge
    override fun hashCode(): Int = 42

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false
        other as ProductEntity

        if (id != other.id) return false
        if (name != other.name) return false
        if (description != other.description) return false
        if (image != other.image) return false

        return true
    }

}

