package br.com.integrador.resource;



import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import br.com.integrador.model.Login;

import br.com.integrador.repository.PessoaRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/login")
public class LoginResource {

	@Autowired
	private PessoaRepository pessoarepository;
	
	@PostMapping
	public ResponseEntity<Object[]> create( @RequestBody Login Login, HttpServletResponse response) {
		return ResponseEntity.ok(pessoarepository.findFiltroUsuario(Login.getUsuario(), Login.getSenha()));
	}
	/*@PostMapping
	public ResponseEntity<List<PessoaLista>> create( @RequestBody Login Login, HttpServletResponse response) {
		return ResponseEntity.ok(pessoarepository.findFiltroUsuario(Login.getUsuario(), Login.getSenha()));
	}*/
}
