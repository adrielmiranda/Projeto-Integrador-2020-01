package br.com.integrador.resource;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;


import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.integrador.model.Pessoa;
import br.com.integrador.model.PessoaLista;
import br.com.integrador.repository.PessoaRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/pessoa")
public class PessoaResource {

	@Autowired
	private PessoaRepository pessoarepository;
	
	@GetMapping
	public List<Pessoa> list() {
		return pessoarepository.findAll();
	}

	@GetMapping("perfil/{perfil}")
	public List<PessoaLista> list(@PathVariable String perfil) {
		return pessoarepository.listaPessoaPorPerfil(perfil);
	}
	
	@GetMapping("/{id}")
	public Optional<Pessoa> findById(@PathVariable Long id) {
		return pessoarepository.findById(id);
	}
	
	
	@PostMapping
	public ResponseEntity<Pessoa> create( @RequestBody Pessoa Pessoa, HttpServletResponse response) {
		Pessoa save = pessoarepository.save(Pessoa);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}").buildAndExpand(save.getId()).toUri();
		return ResponseEntity.created(uri).body(save);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		pessoarepository.deleteById(id);
	}
	

	@PutMapping("/{id}")
	public ResponseEntity<Pessoa> update(@PathVariable Long id,  @RequestBody Pessoa Pessoa) {
		Optional<Pessoa> PessoaBanco = pessoarepository.findById(id);
		BeanUtils.copyProperties(Pessoa, PessoaBanco.get(), "id");
		pessoarepository.save(PessoaBanco.get());
		return ResponseEntity.ok(Pessoa);
	}
}
