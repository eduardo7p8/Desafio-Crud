/*
 * package com.br.desafios.domain;
 * 
 * import java.io.Serializable; import java.util.ArrayList; import
 * java.util.List;
 * 
 * import javax.persistence.Entity; import javax.persistence.GeneratedValue;
 * import javax.persistence.GenerationType; import javax.persistence.Id; import
 * javax.persistence.ManyToMany;
 * 
 * import com.fasterxml.jackson.annotation.JsonManagedReference;
 * 
 * @Entity public class Categoria implements Serializable {
 * 
 * private static final long serialVersionUID = 1L;
 * 
 * @Id
 * 
 * @GeneratedValue(strategy = GenerationType.IDENTITY) private Integer id;
 * private String nome;
 * 
 * @JsonManagedReference
 * 
 * @ManyToMany(mappedBy = "categorias") private List<Produto> produtos = new
 * ArrayList<>();
 * 
 * public Categoria () {
 * 
 * }
 * 
 * public Categoria(Integer id, String nome) { super(); this.id = id; this.nome
 * = nome; } public Integer getId() { return id; }
 * 
 * public void setId(Integer id) { this.id = id; } public String getNome() {
 * return nome; } public void setNome(String nome) { this.nome = nome; } public
 * List<Produto> getProdutos() { return produtos; }
 * 
 * public void setProdutos(List<Produto> produtos) { this.produtos = produtos; }
 * 
 * @Override public int hashCode() { final int prime = 31; int result = 1;
 * result = prime * result + ((id == null) ? 0 : id.hashCode()); return result;
 * }
 * 
 * @Override public boolean equals(Object obj) { if (this == obj) return true;
 * if (obj == null) return false; if (getClass() != obj.getClass()) return
 * false; Categoria other = (Categoria) obj; if (id == null) { if (other.id !=
 * null) return false; } else if (!id.equals(other.id)) return false; return
 * true; }
 * 
 * 
 * 
 * 
 * 
 * }
 */

package com.br.desafios.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity

public class User implements Serializable{
	
	

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nome;
	private String cpf;
	private String telefone;
	private String celular;
	private String email;
	private String bairro;
	private String cep;
	private String cidade;
	private String uf;
	 
	
	public User () {
	}


	public User(Integer id, String nome, String cpf, String telefone, String celular, String email, String bairro,
			String cep, String cidade, String uf) {
		super();
		this.id = id;
		this.nome = nome;
		this.cpf = cpf;
		this.telefone = telefone;
		this.celular = celular;
		this.email = email;
		this.bairro = bairro;
		this.cep = cep;
		this.cidade = cidade;
		this.uf = uf;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public String getCpf() {
		return cpf;
	}


	public void setCpf(String cpf) {
		this.cpf = cpf;
	}


	public String getTelefone() {
		return telefone;
	}


	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}


	public String getCelular() {
		return celular;
	}


	public void setCelular(String celular) {
		this.celular = celular;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getBairro() {
		return bairro;
	}


	public void setBairro(String bairro) {
		this.bairro = bairro;
	}


	public String getCep() {
		return cep;
	}


	public void setCep(String cep) {
		this.cep = cep;
	}


	public String getCidade() {
		return cidade;
	}


	public void setCidade(String cidade) {
		this.cidade = cidade;
	}


	public String getUf() {
		return uf;
	}


	public void setUf(String uf) {
		this.uf = uf;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	
	
	
	
	
	
	
	
}