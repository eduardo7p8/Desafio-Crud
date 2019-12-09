package com.br.desafios;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import com.br.desafios.domain.User;

import com.br.desafios.repositories.UsersRepository;






@SpringBootApplication
public class DesafioApplication  implements CommandLineRunner {
		@Autowired
		private UsersRepository usersRepository;
		
		
	public static void main(String[] args) {
		SpringApplication.run(DesafioApplication.class, args);
	}

	  
	
	
	@Override
	public void run(String... args) throws Exception {
		
	
		 
		
		
		User cat1 = new User(null, "Eduardo Alves","00000000000", "33333333", "3333333333","eduardo@gmail.com","Morro da Cruz","71666666","Brasilia","DF");
		User cat2 = new User(null, "Eduardo Alves Rodrigues","00000000000", "33333333", "3333333333","eduardo@gmail.com","Morro da Vista","71666666","Brasilia","DF");
		
		
		
		usersRepository.saveAll(Arrays.asList(cat1, cat2));
		
		
	}
	
	

}
