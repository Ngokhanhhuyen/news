package net.codejava.VIEW;

public class newsView {

    private Integer id;

    private Long idType;

    private String Title;

    private String Summary;

    private String Content;

    private String nameImage;

    private Integer countLike;

    private Integer countView;

    private String typeName;

    public newsView() {
        super();
    }

    public newsView(Long idType, String title, String summary, String content, String nameImage, int countlike,
            int countview, String typeName) {
        this.idType = idType;
        this.Title = title;
        this.Summary = summary;
        this.Content = content;
        this.nameImage = nameImage;
        this.countLike = countlike;
        this.countView = countview;
        this.typeName = typeName;
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
     * @return String return the typeName
     */
    public String getTypeName() {
        return typeName;
    }

    /**
     * @param typeName the typeName to set
     */
    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

}
