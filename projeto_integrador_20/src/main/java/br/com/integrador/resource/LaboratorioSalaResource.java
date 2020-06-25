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

import br.com.integrador.model.LaboratorioSala;
import br.com.integrador.repository.LaboratorioSalaRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/laboratorio")
public class LaboratorioSalaResource {

	@Autowired
	private LaboratorioSalaRepository laboratoriosalarepository;
	
	@GetMapping
	public List<LaboratorioSala> list() {
		return laboratoriosalarepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Optional<LaboratorioSala> findById(@PathVariable Long id) {
		return laboratoriosalarepository.findById(id);
	}
	
	@PostMapping
	public ResponseEntity<LaboratorioSala> create(@RequestBody LaboratorioSala LaboratorioSala, HttpServletResponse response) {
		LaboratorioSala save = laboratoriosalarepository.save(LaboratorioSala);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}").buildAndExpand(save.getId()).toUri();
		return ResponseEntity.created(uri).body(save);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		laboratoriosalarepository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<LaboratorioSala> update(@PathVariable Long id, @RequestBody LaboratorioSala LaboratorioSala) {
		Optional<LaboratorioSala> LaboratorioSalaBanco = laboratoriosalarepository.findById(id);
		BeanUtils.copyProperties(LaboratorioSala, LaboratorioSalaBanco.get(), "id");
		laboratoriosalarepository.save(LaboratorioSalaBanco.get());
		return ResponseEntity.ok(LaboratorioSala);
	}
}
