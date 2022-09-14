import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './home.module.scss';

import CardItem from '../../Components/Home/CardItem';
import CategoryItem from '../../Components/Home/CategoryItem';
import axios from 'axios';
import { NewsContext } from '../../Store/Context/NewsContext';
import { useNavigate } from 'react-router-dom';
import CardNewsItLeft from '../../Components/Home/CardNewsItLeft';
import CardNewsItRight from '../../Components/Home/CardNewsItRight';

const cx = classNames.bind(styles);

function Home() {
    const [newsTop5, setNews] = useState([]);
    const {
        newsState: { news },
    } = useContext(NewsContext);
    const navi = useNavigate();
    useEffect(() => {
        try {
            async function fetchData() {
                const response = await axios.get(
                    'http://localhost:8080/news/allnews',
                );
                setNews(response.data);
            }
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-News')}>
                <div className={cx('inner')}>
                    {newsTop5.slice(0, 1).map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={cx('item-news--box')}
                                onClick={(e) => {
                                    navi(`/detail/${item.id}`);
                                }}
                            >
                                <div className={cx('News--image-news-large')}>
                                    <img
                                        src={`http://localhost:8081/image/${item.nameImage}`}
                                        alt=""
                                    />
                                </div>
                                <div className={cx('news--detail')}>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        );
                    })}

                    {newsTop5.slice(1, 5).map((item, index) => {
                        return (
                            <div
                                className={cx('item-news--box')}
                                key={index}
                                onClick={(e) => {
                                    navi(`/detail/${item.id}`);
                                }}
                            >
                                <div className={cx('News--image-news')}>
                                    <img
                                        src={`http://localhost:8081/image/${item.nameImage}`}
                                        alt=""
                                    />
                                </div>
                                <div className={cx('news--detail')}>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={cx('box-Feature')}>
                <h2>Showbiz</h2>

                <div className={cx('list-news--feature')}>
                    {newsTop5.slice(0, 3).map((item, index) => {
                        return (
                            <CardItem
                                key={index}
                                nameImage={`http://localhost:8081/image/${item.nameImage}`}
                                author={item.author}
                                countlike={item.countLike}
                                countview={item.countView}
                                title={item.title}
                                id={item.id}
                            />
                        );
                    })}
                </div>
            </div>
            <div className={cx('new-update')}>
                <h2>Khoa học công nghệ</h2>

                <div className={cx('list-news--update')}>
                    <CardNewsItLeft />
                    <CardNewsItRight />
                </div>
            </div>
            <div className={cx('new-list')}>
                <div className={cx('list-news--left')}>
                    <h2>Thời trang</h2>

                    {news.map((item, index) => {
                        if (item[6] === 'Thời trang') {
                            return (
                                <CategoryItem
                                    key={index}
                                    nameImage={`http://localhost:8081/image/${item[7]}`}
                                    title={item[1]}
                                    id={item[0]}
                                />
                            );
                        } else {
                            return <></>;
                        }
                    })}
                </div>
                <div className={cx('list-news--right')}>
                    <h2>Thể thao</h2>
                    {news.map((item, index) => {
                        if (item[6] === 'Giải trí') {
                            return (
                                <CategoryItem
                                    key={index}
                                    nameImage={`http://localhost:8081/image/${item[7]}`}
                                    title={item[1]}
                                    id={item[0]}
                                />
                            );
                        } else {
                            return <></>;
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
