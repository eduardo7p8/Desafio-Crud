package com.br.desafios.services;


import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.desafios.domain.User;
import com.br.desafios.repositories.UsersRepository;
import com.br.desafios.services.exceptions.ObjectNotFoundException;




@Service
public class UserService {
	
	@Autowired
	private UsersRepository repo;
	


	
	

	

	public User find(Integer id) {
		Optional<User> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
		"Objeto não encontrado! Id: " + id + ", Tipo: " + User.class.getName()));
		}
	
	
	

	
		public User insert(User obj) {
			obj.setId(null);
			return repo.save(obj);
		}
		public User update(User obj) {
			find(obj.getId());
			return repo.save(obj);
		}
		public void delete(Integer id) {
			find(id);
		repo.deleteById(id);
		}






		
}
