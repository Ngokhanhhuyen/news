package net.codejava.news;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsRepository extends JpaRepository<News, Integer> {

    @Query(value = "SELECT * FROM news_view", nativeQuery = true)
    List findAllNews();

    @Query(value = "SELECT * FROM news_view where news_view.id like :idNews", nativeQuery = true)
    List findNewsById(@Param("idNews") Integer idNews);

    @Query(value = "SELECT * FROM news.news_view_home;", nativeQuery = true)
    List<News> findHomeNews();

    @Query(value = "select * from news where title like " + "%" + ":intitle" + "%", nativeQuery = true)
    List<News> findByTitleLikeF(@Param("intitle") String intitle);

}
