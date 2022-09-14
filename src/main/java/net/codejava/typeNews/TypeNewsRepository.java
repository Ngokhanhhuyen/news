package net.codejava.typeNews;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeNewsRepository extends JpaRepository<TypeNews, Integer> {

}
