package br.com.integrador.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "pessoa")
public class Pessoa {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "pes_id")
	private Long id;
	
	@Column(name = "pes_nome")
	//@Size( max = 60)
	//@PastOrPresent
	private String nome;
	
	@Column(name = "pes_cpf_cnpj")//criar uma mascara
	private String cpfcnpj ;
	
	@Column(name = "pes_telefone")//criar uma mascara
	private String fone ;
	
	@Column(name = "pes_email")//criar uma mascara
	private String email ;
	
	@Column(name = "pes_funcao")//criar uma mascara
	private String funcao ;
	
	@Column(name = "pes_login")//criar uma mascara
	private String login ;
	
	@Column(name = "pes_senha")//criar uma mascara
	private String senha ;
	
	@Column(name = "pes_perfil")//criar uma mascara
	private String perfil ;

	public Pessoa(Long id, String nome, String cpfcnpj, String fone, String email, String funcao, String login,
			String senha, String perfil) {
		super();
		this.id = id;
		this.nome = nome;
		this.cpfcnpj = cpfcnpj;
		this.fone = fone;
		this.email = email;
		this.funcao = funcao;
		this.login = login;
		this.senha = senha;
		this.perfil = perfil;
	}

	public Pessoa() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpfcnpj() {
		return cpfcnpj;
	}

	public void setCpfcnpj(String cpfcnpj) {
		this.cpfcnpj = cpfcnpj;
	}

	public String getFone() {
		return fone;
	}

	public void setFone(String fone) {
		this.fone = fone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFuncao() {
		return funcao;
	}

	public void setFuncao(String funcao) {
		this.funcao = funcao;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getPerfil() {
		return perfil;
	}

	public void setPerfil(String perfil) {
		this.perfil = perfil;
	}
	
	
}
