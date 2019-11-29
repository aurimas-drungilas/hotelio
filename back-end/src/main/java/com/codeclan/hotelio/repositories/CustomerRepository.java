package com.codeclan.hotelio.repositories;

import com.codeclan.hotelio.models.Customer;
import com.codeclan.hotelio.projections.EmbedCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedCustomer.class)
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
