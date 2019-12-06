package com.br.desafios.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.br.desafios.domain.User;

@Repository
public interface UsersRepository extends JpaRepository<User, Integer> {

}
