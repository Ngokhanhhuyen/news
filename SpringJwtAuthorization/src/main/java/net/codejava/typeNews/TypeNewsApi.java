package net.codejava.typeNews;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/typeNews")
public class TypeNewsApi {

    @Autowired
    private TypeNewsRepository repo;

    @GetMapping(value = "/all")
    List<TypeNews> getTypeNews() {
        return repo.findAll();
    }

    @PostMapping(value = "/addTypeNews")
    public List<TypeNews> createNews(@RequestBody @Valid TypeNews type) {
        TypeNews entity = new TypeNews();
        entity.setTypeName(type.getTypeName());
        repo.save(entity);
        List<TypeNews> listItemFood = repo.findAll();
        return listItemFood;
    }

    @PutMapping(value = "/updatetype")
    public Boolean findUpdateNews(@RequestBody TypeNews type) {

        Optional<TypeNews> result = repo.findById(type.getId());

        TypeNews typeUpdate = new TypeNews();

        try {
            if (result.isEmpty() == false) {
                typeUpdate.setId(type.getId());
                typeUpdate.setTypeName(type.getTypeName());
            }
            repo.save(typeUpdate);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @DeleteMapping(value = "/deleteTypeNews/{id}")
    public Boolean deleteNews(@PathVariable Integer id) {

        Optional<TypeNews> result = repo.findById(id);

        TypeNews newsDelete = new TypeNews();

        try {
            if (result.isEmpty() == false) {
                newsDelete.setId(result.get().getId());
                newsDelete.setTypeName(result.get().getTypeName());
            }
            repo.delete(newsDelete);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}
