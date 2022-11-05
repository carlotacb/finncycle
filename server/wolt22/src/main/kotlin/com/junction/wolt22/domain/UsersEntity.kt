package com.junction.wolt22.domain

import javax.persistence.*

@Entity
@Table(name = "users", schema = "public", catalog = "finncycle")
open class UsersEntity (

    @get:Basic
    @get:Column(name = "name", nullable = false)
    var name: String? = null,

    @get:Basic
@get:Column(name = "email", nullable = false)
var email: String? = null,

@get:Basic
@get:Column(name = "password", nullable = false)
var password: String? = null,

@get:Basic
@get:Column(name = "address", nullable = false)
var address: String? = null,

@get:Basic
@get:Column(name = "postal_code", nullable = false)
var postalCode: Int? = null,

@get:Basic
@get:Column(name = "city", nullable = false)
var city: String? = null,

@get:Basic
@get:Column(name = "country", nullable = false)
var country: String? = null
        ){
    @get:Id
    @get:Column(name = "id", nullable = false, insertable = false, updatable = false)
    @get:SequenceGenerator(name="idUsersGenerator", sequenceName = "users_id_seq", allocationSize = 1)
    @get:GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "idUsersGenerator")
    var id: Int = 0


    @get:OneToMany(mappedBy = "refUsersEntity")
    var refCyclesEntities: List<CyclesEntity>? = null

    @get:OneToOne(mappedBy = "refUsersEntity")
    var refProductEntity: ProductEntity? = null

    override fun toString(): String =
        "Entity of type: ${javaClass.name} ( " +
                "id = $id " +
                "name = $name " +
                "email = $email " +
                "password = $password " +
                "address = $address " +
                "postalCode = $postalCode " +
                "city = $city " +
                "country = $country " +
                ")"

    // constant value returned to avoid entity inequality to itself before and after it's update/merge
    override fun hashCode(): Int = 42

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false
        other as UsersEntity

        if (id != other.id) return false
        if (name != other.name) return false
        if (email != other.email) return false
        if (password != other.password) return false
        if (address != other.address) return false
        if (postalCode != other.postalCode) return false
        if (city != other.city) return false
        if (country != other.country) return false

        return true
    }

}

