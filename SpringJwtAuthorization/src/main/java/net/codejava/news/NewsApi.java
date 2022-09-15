package net.codejava.news;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/news")
public class NewsApi {

	@Autowired
	private NewsRepository repo;

	// @RolesAllowed("ROLE_ADMIN")
	@PostMapping(value = "/addNews")
	public List<News> createNews(@RequestBody @Valid News News) {
		News entity = new News();
		entity.setTitle(News.getTitle());
		entity.setSummary(News.getSummary());
		entity.setNameImage(News.getNameImage());
		entity.setIdType(News.getIdType());
		entity.setCountView(News.getCountView());
		entity.setCountLike(News.getCountLike());
		entity.setContent(News.getContent());
		entity.setAuthor(News.getAuthor());
		repo.save(entity);
		List<News> listItemFood = repo.findAll();
		return listItemFood;
	}

	@GetMapping(value = "/all")
	public ResponseEntity<?> listNews() {

		List list = repo.findAllNews();

		return ResponseEntity.ok(list);
	}

	@GetMapping(value = "/byTitle")
	public ResponseEntity<?> findByTitleLikeFun(@RequestParam String title) {

		List<News> list = repo.findByTitleLikeF(title);

		return ResponseEntity.ok(list);
	}

	@GetMapping(value = "/allnews")
	public List<News> list() {
		return repo.findHomeNews();
	}

	@GetMapping(value = "/findNews/{id}")
	public ResponseEntity<?> findNewsByIdRes(@PathVariable Integer id) {

		List news = repo.findNewsById(id);

		return ResponseEntity.ok(news);
	}

	@PutMapping(value = "/updateNews")
	public Boolean findUpdateNews(@RequestBody News news) {

		Optional<News> result = repo.findById(news.getId());

		News newsUpdate = new News();

		try {
			if (result.isEmpty() == false) {
				newsUpdate.setId(news.getId());
				newsUpdate.setTitle(news.getTitle());
				newsUpdate.setSummary(news.getSummary());
				newsUpdate.setNameImage(result.get().getNameImage());
				newsUpdate.setIdType(news.getIdType());
				newsUpdate.setCountView(result.get().getCountView());
				newsUpdate.setCountLike(result.get().getCountLike());
				newsUpdate.setContent(news.getContent());
				newsUpdate.setAuthor(result.get().getAuthor());
			}
			repo.save(newsUpdate);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@DeleteMapping(value = "/deleteNews/{id}")
	public Boolean deleteNews(@PathVariable Integer id) {

		Optional<News> result = repo.findById(id);

		News newsDelete = new News();

		try {
			if (result.isEmpty() == false) {
				newsDelete.setId(result.get().getId());
				newsDelete.setTitle(result.get().getTitle());
				newsDelete.setSummary(result.get().getSummary());
				newsDelete.setNameImage(result.get().getNameImage());
				newsDelete.setIdType(result.get().getIdType());
				newsDelete.setCountView(result.get().getCountView());
				newsDelete.setCountLike(result.get().getCountLike());
				newsDelete.setContent(result.get().getContent());
				newsDelete.setAuthor(result.get().getAuthor());
			}
			repo.delete(newsDelete);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
