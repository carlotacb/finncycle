package com.junction.wolt22.domain

import javax.persistence.*

@Entity
@Table(name = "users", schema = "public", catalog = "finncycle")
open class UsersEntity (

    @get:Basic
    @get:Column(name = "name", nullable = false)
    open var name: String? = null,

    @get:Basic
@get:Column(name = "email", nullable = false)
open var email: String? = null,

@get:Basic
@get:Column(name = "password", nullable = false)
open var password: String? = null,

@get:Basic
@get:Column(name = "address", nullable = false)
open var address: String? = null,

@get:Basic
@get:Column(name = "postal_code", nullable = false)
open var postalCode: Int? = null,

@get:Basic
@get:Column(name = "city", nullable = false)
open var city: String? = null,

@get:Basic
@get:Column(name = "country", nullable = false)
open var country: String? = null,

@get:Basic
@get:Column(name = "phone", nullable = false)
open var phone: String = "",

@get:Basic
@get:Column(name = "apikey", nullable = false)
open var apiKey: String = ""
        ){
    @get:Id
    @get:Column(name = "id", nullable = false, insertable = false, updatable = false)
    @get:SequenceGenerator(name="idUsersGenerator", sequenceName = "users_id_seq", allocationSize = 1)
    @get:GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "idUsersGenerator")
    open var id: Int = 0


    @get:OneToMany(mappedBy = "refUsersEntity")
    open var refCyclesEntities: List<CyclesEntity>? = null

    @get:OneToMany(mappedBy = "refUsersEntity")
    open var refProductEntity: List<ProductEntity> = emptyList()

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

