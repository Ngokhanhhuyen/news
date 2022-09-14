package net.codejava.news;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

@Entity
@Table(name = "News")
public class News {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "idType")
	@NotNull
	private Long idType;

	@Column(nullable = false, length = 128, name = "Title")
	@NotNull
	@Length(min = 5, max = 128)
	private String Title;

	@Column(name = "summary")
	@NotNull
	private String Summary;

	@Column(name = "author")
	@NotNull
	private String author;

	@Column(name = "content")
	@NotNull
	private String Content;

	@Column(name = "nameImage")
	@NotNull
	private String nameImage;

	@Column(name = "countLike")
	@NotNull
	private Integer countLike;

	@Column(name = "countView")
	@NotNull
	private Integer countView;

	public News() {
		super();
	}

	public News(Long idType, String title, String summary, String author, String content, String nameImage,
			int countlike,
			int countview) {
		this.idType = idType;
		this.Title = title;
		this.Summary = summary;
		this.Content = content;
		this.nameImage = nameImage;
		this.countLike = countlike;
		this.countView = countview;
		this.author = author;
	}

	/**
	 * @return Integer return the id
	 */
	public Integer getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Integer id) {
		this.id = id;
	}

	/**
	 * @return String return the Title
	 */
	public String getTitle() {
		return Title;
	}

	/**
	 * @param Title the Title to set
	 */
	public void setTitle(String Title) {
		this.Title = Title;
	}

	/**
	 * @return Long return the idTypeNews
	 */
	public Long getIdType() {
		return idType;
	}

	/**
	 * @param idTypeNews the idTypeNews to set
	 */
	public void setIdType(Long idTypeNews) {
		this.idType = idTypeNews;
	}

	/**
	 * @return String return the Summary
	 */
	public String getSummary() {
		return Summary;
	}

	/**
	 * @param Summary the Summary to set
	 */
	public void setSummary(String Summary) {
		this.Summary = Summary;
	}

	/**
	 * @return String return the Content
	 */
	public String getContent() {
		return Content;
	}

	/**
	 * @param Content the Content to set
	 */
	public void setContent(String Content) {
		this.Content = Content;
	}

	/**
	 * @return String return the nameImage
	 */
	public String getNameImage() {
		return nameImage;
	}

	/**
	 * @param nameImage the nameImage to set
	 */
	public void setNameImage(String nameImage) {
		this.nameImage = nameImage;
	}

	/**
	 * @return Integer return the countLike
	 */
	public Integer getCountLike() {
		return countLike;
	}

	/**
	 * @param countLike the countLike to set
	 */
	public void setCountLike(Integer countLike) {
		this.countLike = countLike;
	}

	/**
	 * @return Integer return the countView
	 */
	public Integer getCountView() {
		return countView;
	}

	/**
	 * @param countView the countView to set
	 */
	public void setCountView(Integer countView) {
		this.countView = countView;
	}

	/**
	 * @return String return the author
	 */
	public String getAuthor() {
		return author;
	}

	/**
	 * @param author the author to set
	 */
	public void setAuthor(String author) {
		this.author = author;
	}

}
